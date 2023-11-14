import ITourismStrategy from '../model/ITourismStrategy';

export default class Hotel implements ITourismStrategy {
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
        service: 'tripwiz-hotel',

        places: [
          {
            types: [
              'hotel',
              'event_venue',
              'lodging',
              'restaurant',
              'food',
              'point_of_interest',
              'establishment',
            ],
            formattedAddress:
              '761 Rubenstein Dr, Moreleta Park, Pretoria, 0181, South Africa',
            location: {
              latitude: -25.8187752,
              longitude: 28.294002799999998,
            },
          },
          {
            types: [
              'hotel',
              'guest_house',
              'bed_and_breakfast',
              'lodging',
              'point_of_interest',
              'establishment',
            ],
            formattedAddress:
              '521 Robert Craib St, Constantia Park, Pretoria, 0010, South Africa',
            location: {
              latitude: -25.8070901,
              longitude: 28.2815844,
            },
          },
          {
            types: [
              'guest_house',
              'bed_and_breakfast',
              'resort_hotel',
              'golf_course',
              'athletic_field',
              'hotel',
              'sports_complex',
              'lodging',
              'point_of_interest',
              'establishment',
            ],
            formattedAddress:
              '43 Emfuleni Rd, Pretoriuspark, Pretoria, 0161, South Africa',
            location: {
              latitude: -25.8200091,
              longitude: 28.3117816,
            },
          },
          {
            types: ['hotel', 'lodging', 'point_of_interest', 'establishment'],
            formattedAddress:
              '281 Beth Duncker St, Garsfontein, Pretoria, 0042, South Africa',
            location: {
              latitude: -25.794113499999998,
              longitude: 28.2878458,
            },
          },
          {
            types: [
              'guest_house',
              'hotel',
              'lodging',
              'point_of_interest',
              'establishment',
            ],
            formattedAddress:
              '730 Thelma St, Garsfontein, Pretoria, 0042, South Africa',
            location: {
              latitude: -25.7958751,
              longitude: 28.3079541,
            },
          },
          {
            types: ['hotel', 'lodging', 'point_of_interest', 'establishment'],
            formattedAddress:
              '649 Jacqueline Dr, Garsfontein, Pretoria, 0042, South Africa',
            location: {
              latitude: -25.794389799999998,
              longitude: 28.3015769,
            },
          },
          {
            types: ['hotel', 'lodging', 'point_of_interest', 'establishment'],
            formattedAddress:
              'Ext 12, 490 Sunbird Ave, Garsfontein, Pretoria, 0042, South Africa',
            location: {
              latitude: -25.804451099999998,
              longitude: 28.2981469,
            },
          },
          {
            types: ['hotel', 'lodging', 'point_of_interest', 'establishment'],
            formattedAddress:
              '402 Aries St, Woodhill Golf Estate, Pretoria, 0076, South Africa',
            location: {
              latitude: -25.8154599,
              longitude: 28.31561,
            },
          },
          {
            types: ['hotel', 'lodging', 'point_of_interest', 'establishment'],
            formattedAddress:
              '881 Patryshond St, Garsfontein, Pretoria, 0042, South Africa',
            location: {
              latitude: -25.807347,
              longitude: 28.3044405,
            },
          },
          {
            types: ['hotel', 'lodging', 'point_of_interest', 'establishment'],
            formattedAddress:
              '522, X08, 0042 Jacqueline Dr, Garsfontein, Pretoria, 0042, South Africa',
            location: {
              latitude: -25.792508599999998,
              longitude: 28.299590199999997,
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
