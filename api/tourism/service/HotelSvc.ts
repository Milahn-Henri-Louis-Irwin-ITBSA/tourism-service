import ITourismStrategy from '../model/ITourismStrategy';

export default class TourismStrategy implements ITourismStrategy {
  public getClosestCoordinates = async (
    lat: number,
    lng: number,
    radius: number
  ): Promise<any> => {
    return Promise.resolve({ message: 'pong' });
  };
}
