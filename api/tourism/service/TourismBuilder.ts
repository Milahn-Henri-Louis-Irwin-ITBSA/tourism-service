import Airport from './AirportSvc';
import Hotel from './HotelSvc';
import Fuel from './FuelSvc';

export default class TourismBuilder {
  private _services: (Airport | Hotel | Fuel)[] = [];

  public addService(service: Airport | Hotel | Fuel): TourismBuilder {
    // Check if the service is already in the array
    if (this._services.includes(service)) {
      return this;
    }
    this._services.push(service);
    return this;
  }
  public build(): (Airport | Hotel | Fuel)[] {
    return this._services;
  }
}
