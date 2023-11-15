import ITourismStrategy from '../model/ITourismStrategy';

export default class Fuel implements ITourismStrategy {
  constructor(private radius: number) {}
  public getClosestCoordinates = async (
    lat: number,
    lng: number
  ): Promise<any> => {
    try {
      const response = await fetch(`${process.env.TRIPWIZ_FUEL_SERVICE}`, {
        method: 'POST',
        headers: {
          Authorization: 'hello',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coordinates: {
            latitude: lat,
            longitude: lng,
          },
          radius: this.radius,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error getting hotel data. Status: ${response.status}`);
      }

      return await response.json();

      // return {
      //   service: 'tripwiz-fuel',
      //   places: [
      //     {
      //       types: [
      //         'gas_station',
      //         'convenience_store',
      //         'courier_service',
      //         'atm',
      //         'sandwich_shop',
      //         'bakery',
      //         'restaurant',
      //         'food',
      //         'finance',
      //         'point_of_interest',
      //         'store',
      //         'establishment',
      //       ],
      //       formattedAddress:
      //         '893 Rubenstein Dr, Moreleta Park, Pretoria, 0044, South Africa',
      //       location: {
      //         latitude: -25.809912800000003,
      //         longitude: 28.297369699999997,
      //       },
      //     },
      //     {
      //       types: [
      //         'gas_station',
      //         'car_wash',
      //         'convenience_store',
      //         'car_repair',
      //         'bakery',
      //         'food',
      //         'point_of_interest',
      //         'store',
      //         'establishment',
      //       ],
      //       formattedAddress:
      //         '960 St Bernard Dr, Garsfontein, Pretoria, 0081, South Africa',
      //       location: {
      //         latitude: -25.807790900000004,
      //         longitude: 28.3170829,
      //       },
      //     },
      //     {
      //       types: [
      //         'gas_station',
      //         'car_repair',
      //         'point_of_interest',
      //         'establishment',
      //       ],
      //       formattedAddress:
      //         'Cnr St Bernard Dr &, Borzoi St, Garsfontein, Pretoria, 0042, South Africa',
      //       location: {
      //         latitude: -25.8028458,
      //         longitude: 28.310686999999998,
      //       },
      //     },
      //     {
      //       types: [
      //         'gas_station',
      //         'convenience_store',
      //         'food',
      //         'point_of_interest',
      //         'store',
      //         'establishment',
      //       ],
      //       formattedAddress:
      //         '649 Jacqueline Dr, Garsfontein, Pretoria, 0060, South Africa',
      //       location: {
      //         latitude: -25.794455,
      //         longitude: 28.301672999999997,
      //       },
      //     },
      //     {
      //       types: ['gas_station', 'point_of_interest', 'establishment'],
      //       formattedAddress:
      //         '680 Rubenstein Dr, Moreleta Park, Pretoria, 0044, South Africa',
      //       location: {
      //         latitude: -25.819295,
      //         longitude: 28.2883,
      //       },
      //     },
      //     {
      //       types: [
      //         'gas_station',
      //         'atm',
      //         'finance',
      //         'point_of_interest',
      //         'establishment',
      //       ],
      //       formattedAddress:
      //         '509 Niesewand St, Constantia Park, Pretoria, 0010, South Africa',
      //       location: {
      //         latitude: -25.803254799999998,
      //         longitude: 28.286317999999998,
      //       },
      //     },
      //     {
      //       types: ['gas_station', 'point_of_interest', 'establishment'],
      //       formattedAddress:
      //         '821 Delfi Ave, Garsfontein, Pretoria, 0042, South Africa',
      //       location: {
      //         latitude: -25.8053399,
      //         longitude: 28.3014014,
      //       },
      //     },
      //     {
      //       types: [
      //         'gas_station',
      //         'convenience_store',
      //         'rest_stop',
      //         'car_repair',
      //         'bakery',
      //         'food',
      //         'point_of_interest',
      //         'store',
      //         'establishment',
      //       ],
      //       formattedAddress:
      //         'Cnr Duvernoy &, Niesewand St, Constantia Park, Pretoria, 0010, South Africa',
      //       location: {
      //         latitude: -25.803230799999998,
      //         longitude: 28.2863315,
      //       },
      //     },
      //     {
      //       types: ['gas_station', 'point_of_interest', 'establishment'],
      //       formattedAddress:
      //         '870 Patryshond St, Garsfontein, Pretoria, 0081, South Africa',
      //       location: {
      //         latitude: -25.806494999999998,
      //         longitude: 28.304620099999998,
      //       },
      //     },
      //     {
      //       types: ['gas_station', 'point_of_interest', 'establishment'],
      //       formattedAddress:
      //         '430 Zita St, Garsfontein, Pretoria, 0081, South Africa',
      //       location: {
      //         latitude: -25.7909084,
      //         longitude: 28.2965336,
      //       },
      //     },
      //   ],
      // };
    } catch (error) {
      // Handle error here
      console.log(error);
      throw new Error('Error getting hotel data');
    }
  };
}
