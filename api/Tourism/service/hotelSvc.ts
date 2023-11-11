import axios from 'axios';
import { Logger } from '../../../libs/logger';
import { Service } from 'typedi';
import { IHotel, IFlights, TourismObject } from '../model/iTourismInfo';


@Service()
export class hotelSvc {
  constructor() {
  }

  async getHotelInfo(): Promise<Array<TourismObject>> {
    //TODO: What does the hotel data look like????

    try {
      const hotelList: IHotel = await axios.get(
        'https://gorest.co.in/public/v2/posts'
      );
      return Promise.resolve(hotelList.data);
    } catch (error) {
      Logger.error(
        'Service: userInfoExecuter',
        'errorInfo:' + JSON.stringify(error)
      );
      return Promise.reject(error);
    }
  }


}
