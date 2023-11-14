import ITourismStrategy from '../model/ITourismStrategy';

export default class Airport implements ITourismStrategy {
  public getClosestCoordinates = async (
    lat: number,
    lng: number,
    radius: number
  ): Promise<any> => {
    try {
      // const response = await fetch(`${process.env.TRIPWIZ_HOTEL_SERVICE}`, {
      //   method: 'POST',
      //   headers: {
      //     Authorization: 'hello',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     coordinates: {
      //       latitude: lat,
      //       longitude: lng,
      //     },
      //     radius: radius,
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error(`Error getting hotel data. Status: ${response.status}`);
      // }

      // const data = await response.json();
      return {
        service: 'tripwiz-airport',
        places: [
          {
            types: [
              'heliport',
              'airport',
              'point_of_interest',
              'establishment',
            ],
            formattedAddress:
              '81 Netcare St, Moreleta Park, Pretoria, 0081, South Africa',
            location: {
              latitude: -25.820033499999997,
              longitude: 28.3032985,
            },
          },
        ],
      };
    } catch (error) {
      // Handle error here
      console.log(error);
      throw new Error('Error getting hotel data');
    }
  };
}
