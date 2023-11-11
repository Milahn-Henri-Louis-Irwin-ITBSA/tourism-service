import axios from 'axios';

const resolvers = {
  Query: {
    tourismInfo: async () => {
      try {
        const hotelInfo = await axios.get('https://tripwiz:3001/hotel-info');
        const flightInfo = await axios.get('https://tripwiz:3002/flight-info');
        const fuelInfo = await axios.get('https://tripwiz:3003/fuel-info');

        return {
          hotel: hotelInfo.data,
          flight: flightInfo.data,
          fuel: fuelInfo.data,
        };
      } catch (err: any) {
        console.error(err);
        throw new Error('Failed to fetch tourism information');
      }
    },
  },
};

module.exports = resolvers;
