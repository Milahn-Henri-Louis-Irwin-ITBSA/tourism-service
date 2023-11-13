import ITourismStrategy from '../model/ITourismStrategy';

export default class Hotel implements ITourismStrategy {
  public getClosestCoordinates = async (
    lat: number,
    lng: number,
    radius: number
  ): Promise<any> => {
    try {
      console.log(process.env.TRIPWIZ_HOTEL_SERVICE);

      const response = await fetch(`${process.env.TRIPWIZ_HOTEL_SERVICE}`, {
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
          radius: radius,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error getting hotel data. Status: ${response.status}`);
      }

      const data = await response.json();
      return {
        service: 'tripwiz-hotel',
        data: data,
      };
    } catch (error) {
      // Handle error here
      console.log(error);
      throw new Error('Error getting hotel data');
    }
  };
}
