export default interface ITourismStrategy {
  getClosestCoordinates: (lat: number, lng: number) => Promise<any>;
}
