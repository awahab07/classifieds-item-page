import { ILonLat } from '../../models/LonLat';

export const getGMapQueryUrl = (latLng: ILonLat) =>
  `https://www.google.com/maps/search/?api=1&query=${latLng.lat},${latLng.lon}`;
