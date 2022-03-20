import {
  FETCHING_LOCATION_BY_CITY,
  FETCH_LOCATION_BY_CITY_SUCCESS,
  FETCH_LOCATION_BY_CITY_FAILED,
  FETCHING_LOCATION_BY_WOEID,
  FETCH_LOCATION_BY_WOEID_SUCCESS,
  FETCH_LOCATION_BY_WOEID_FAILED,
  SET_EMPTY_LOCATION,
  RESET_INIT_STATE,
} from "./types";

import { getLocationByCity, getLocationByWoeId } from "../../api/weather";
import { LocationResponse, LocationWoeResponse } from "../../api/weather/type";

const setEmptyLocation = () => (dispatch) => {
  dispatch({
    type: SET_EMPTY_LOCATION,
    payload: [],
  });
};

const resetInitState = () => (dispatch) => {
  dispatch({
    type: RESET_INIT_STATE,
  });
};

const fetchLocationByWoeId = (woeId: string) => {
  return async (dispatch) => {
    dispatch({
      type: FETCHING_LOCATION_BY_WOEID,
    });
    try {
      const locationWoeRes: LocationWoeResponse = await getLocationByWoeId(
        woeId
      );
      const { title } = locationWoeRes;
      dispatch({
        type: FETCH_LOCATION_BY_WOEID_SUCCESS,
        payload: locationWoeRes.consolidated_weather.map(
          ({
            applicable_date: dayOfWeek,
            max_temp: maxTemp,
            min_temp: minTemp,
            weather_state_abbr: weatherStateAbbr,
            the_temp: theTemp,
            weather_state_name: weaTherState,
          }) => ({
            dayOfWeek,
            maxTemp,
            minTemp,
            weatherStateAbbr,
            theTemp,
            weaTherState,
            title,
          })
        ),
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
      dispatch({
        type: FETCH_LOCATION_BY_CITY_SUCCESS,
        payload: locationRes,
      });
    } catch (error) {
      dispatch({
        type: FETCH_LOCATION_BY_CITY_FAILED,
        payload: error,
      });
    }
  };
};

export {
  fetchLocationByCity,
  fetchLocationByWoeId,
  setEmptyLocation,
  resetInitState,
};
