import {
  FETCHING_LOCATION_BY_CITY,
  FETCH_LOCATION_BY_CITY_SUCCESS,
  FETCH_LOCATION_BY_CITY_SUCCESS_WITH_EMPTY,
  FETCH_LOCATION_BY_CITY_FAILED,
  FETCHING_LOCATION_BY_WOEID,
  FETCH_LOCATION_BY_WOEID_SUCCESS,
  FETCH_LOCATION_BY_WOEID_FAILED,
} from "./types";

import { getLocationByCity, getLocationByWoeId } from "../../api/weather";
import { LocationResponse, LocationWoeResponse } from "../../api/weather/type";

const fetchLocationByWoeId = (woeId: string) => {
  return async (dispatch) => {
    dispatch({
      type: FETCHING_LOCATION_BY_WOEID,
    });
    try {
      const locationWoeRes: LocationWoeResponse = await getLocationByWoeId(
        woeId
      );
      dispatch({
        type: FETCH_LOCATION_BY_WOEID_SUCCESS,
        payload: locationWoeRes.consolidated_weather
          .map(
            ({
              applicable_date: dayOfWeek,
              max_temp: maxTemp,
              min_temp: minTemp,
              weather_state_abbr: weatherStateAbbr,
            }) => ({
              dayOfWeek,
              maxTemp,
              minTemp,
              weatherStateAbbr,
            })
          )
          .slice(0, 5),
      });
    } catch (error) {
      dispatch({
        type: FETCH_LOCATION_BY_WOEID_FAILED,
        payload: error,
      });
    }
  };
};

const fetchLocationByCity = (query: string) => {
  return async (dispatch) => {
    dispatch({
      type: FETCHING_LOCATION_BY_CITY,
    });

    try {
      const locationRes: LocationResponse[] = await getLocationByCity(query);
      if (!locationRes.length) {
        return dispatch({
          type: FETCH_LOCATION_BY_CITY_SUCCESS_WITH_EMPTY,
        });
      }
      const woeId = locationRes[0].woeid.toString();
      dispatch({
        type: FETCH_LOCATION_BY_CITY_SUCCESS,
        payload: woeId,
      });
      await dispatch(fetchLocationByWoeId(woeId));
    } catch (error) {
      dispatch({
        type: FETCH_LOCATION_BY_CITY_FAILED,
        payload: error,
      });
    }
  };
};

export { fetchLocationByCity, fetchLocationByWoeId };
