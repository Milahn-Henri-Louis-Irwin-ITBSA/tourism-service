export default interface ITourismStrategy {
  getClosestCoordinates: (
    lat: number,
    lng: number,
    radius: number
  ) => Promise<any>;
}
