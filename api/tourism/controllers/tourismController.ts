import {
  JsonController,
  Get,
  HeaderParam,
  BodyParam,
} from 'routing-controllers';
import { Service } from 'typedi';
import { URL_INFO } from '../tourismApiInfo';
import HotelSvc from '../service/HotelSvc';
import FlightSvc from '../service/FlightSvc';

@JsonController(URL_INFO.contextPath + '/tourism')
@Service()
export class TourismController {
  @Get('/getData')
  public async getData(
    @HeaderParam('Authorization') authorization: string,
    @BodyParam('coordinates')
    coordinates: { latitude: number; longitude: number },
    @BodyParam('services') services: string[],
    @BodyParam('radius') radius: number
  ): Promise<any> {
    try {
      if (!authorization) {
        return Promise.resolve({
          status: 401,
          message: 'Unauthorized',
        });
      }
      if (!coordinates || !coordinates.latitude || !coordinates.longitude) {
        return Promise.resolve({
          status: 400,
          message: 'Bad Request',
        });
      }
      if (!services) {
        return Promise.resolve({
          status: 400,
          message: 'Bad Request',
        });
      }
      if (!radius) {
        return Promise.resolve({
          status: 400,
          message: 'Bad Request',
        });
      }
      if (typeof radius !== 'number') {
        return Promise.resolve({
          status: 400,
          message: 'Bad Request',
        });
      }
      if (
        typeof coordinates.latitude !== 'number' ||
        typeof coordinates.longitude !== 'number'
      ) {
        return Promise.resolve({
          status: 400,
          message: 'Bad Request',
        });
      }
      if (typeof services !== 'object') {
        return Promise.resolve({
          status: 400,
          message: 'Bad Request',
        });
      }

      const requestedServices = [];

      if (services.includes('hotel')) {
        requestedServices.push(new HotelSvc());
      }
      // if (services.includes('fuel')) {
      //   requestedServices.push(new FuelSvc());
      // }
      if (services.includes('flight')) {
        requestedServices.push(new FlightSvc());
      }

      const data = Promise.all(
        requestedServices.map((svc) =>
          svc.getClosestCoordinates(
            coordinates.latitude,
            coordinates.longitude,
            radius
          )
        )
      );

      return Promise.resolve({
        status: 200,
        tourismInfo: await data,
      });
    } catch (error) {
      console.log(error);
      return Promise.resolve({
        status: 500,
        message: 'Internal Server Error',
      });
    }
  }
}
