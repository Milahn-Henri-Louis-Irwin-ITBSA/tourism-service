export interface IApiInfo {
  contextPath: string;
}

export interface Flight {
  airline: String
  destination: String
  departureTime: Date
}

export interface Hotel {
  name: String
  rating: Number
}

export interface TourismObject {
  hotel: Hotel
  flight: Flight
}
