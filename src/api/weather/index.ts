import { $get } from '../request';
import { LocationResponse, LocationWoeResponse } from './type';
import { LOCATION_PATH, LOCATION_BY_CITY_PATH } from '../../utils/constants';

const getLocationByCity = async (query: string): Promise<LocationResponse[]> => {
  return await $get(`${LOCATION_BY_CITY_PATH}${query}`);
};

const getLocationByWoeId = async (woeId: string): Promise<LocationWoeResponse> => {
  return await $get(`${LOCATION_PATH}/${woeId}/`);
};

export {
  getLocationByCity,
  getLocationByWoeId,
};
