import { Service } from 'typedi';
import HotelSvc from './HotelSvc';
import FlightSvc from './FlightSvc';

@Service()
export default class TourismSvc {
  constructor(public _hotelSvc: HotelSvc, public _flightSvc: FlightSvc) {}

  public async getTourismInfo() {
    const hotelResponse = await this._hotelSvc.getHotels();
    const flightResponse = await this._flightSvc.getFlights();

    return {
      hotel: hotelResponse,
      flight: flightResponse,
    };
  }
}
