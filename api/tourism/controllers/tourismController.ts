import {
  JsonController,
  Get,
  HeaderParam,
  BodyParam,
} from 'routing-controllers';
import { Service } from 'typedi';
import { URL_INFO } from '../tourismApiInfo';
import HotelSvc from '../service/HotelSvc';
import AirportSvc from '../service/AirportSvc';
import FuelSvc from '../service/FuelSvc';
import TourismBuilder from '../service/TourismBuilder';

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

      const tourismBuilder = new TourismBuilder();

      if (services.includes('hotel')) {
        tourismBuilder.addService(new HotelSvc());
      }

      if (services.includes('airport')) {
        tourismBuilder.addService(new AirportSvc());
      }

      if (services.includes('fuel')) {
        tourismBuilder.addService(new FuelSvc());
      }

      const servicesData = await Promise.all(
        tourismBuilder
          .build()
          .map((service) =>
            service.getClosestCoordinates(
              coordinates.latitude,
              coordinates.longitude,
              radius
            )
          )
      );

      return Promise.resolve({
        status: 200,
        data: servicesData.flat().filter((s) => !(s instanceof Error)),
        errors: servicesData.filter((s) => s instanceof Error),
      });
    } catch (error) {
      return Promise.resolve({
        status: 500,
        message: 'Internal Server Error',
      });
    }
  }
}
