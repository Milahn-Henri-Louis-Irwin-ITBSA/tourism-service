import axios from 'axios';
import { Service } from 'typedi';

@Service()
export default class FlightSvc {
  constructor() {
  }

  public async getFlights() {
    const response = await axios.get('http://flight.tripwiz.me/hotel-info');
    return response.data;
  }
}
