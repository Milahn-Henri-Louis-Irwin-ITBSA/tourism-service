import axios from 'axios';
import { Service } from 'typedi';

@Service()
export default class HotelSvc {
  constructor() {}

  public async getHotels() {
    const response = await axios.get('http://hotel.tripwiz.me/hotel-info');
    return response.data;
  }
}
