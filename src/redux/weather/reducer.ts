import { GenericStoreAction } from '../types';

import {
  FETCHING_LOCATION_BY_CITY,
  FETCH_LOCATION_BY_CITY_SUCCESS,
  FETCH_LOCATION_BY_CITY_SUCCESS_WITH_EMPTY,
  FETCH_LOCATION_BY_CITY_FAILED,
  FETCHING_LOCATION_BY_WOEID,
  FETCH_LOCATION_BY_WOEID_SUCCESS,
  FETCH_LOCATION_BY_WOEID_FAILED,
} from './types';

import { ForecastProps } from '../../components/Forecast';

export type WeatherState = {
  isFetching: boolean;
  isFetched: boolean;
  isError: boolean;
  woeid: string;
  query: string;
  errorMessage: string;
  woeLocations: ForecastProps[];
}

const initialState = {
  isFetching: false,
  isFetched: false,
  isError: false,
  woeid: "",
  query: "",
  errorMessage: "",
  woeLocations: [],
};

const reducer = (
  state: WeatherState = initialState,
  action: GenericStoreAction,
) => {
  switch (action.type) {
    case FETCHING_LOCATION_BY_CITY:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isError: false,
        errorMessage: "",
        woeLocations: [],
      };
    case FETCH_LOCATION_BY_CITY_SUCCESS:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        woeid: action.payload,
      };
    case FETCH_LOCATION_BY_CITY_SUCCESS_WITH_EMPTY:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        isError: true,
        woeid: "",
        errorMessage: "City is not found. Please try to enter another city.",
        woeLocations: [],
      };
    case FETCH_LOCATION_BY_CITY_FAILED:
      return {
        ...state,
        isError: true,
        isFetching: false,
        isFetched: true,
        errorMessage: action.payload,
      };
    case FETCHING_LOCATION_BY_WOEID:
      return {
        ...state,
        isFetching: true,
        woeLocations: [],
      };
    case FETCH_LOCATION_BY_WOEID_SUCCESS:
      return {
        ...state,
        ...initialState,
        isFetched: true,
        woeLocations: action.payload,
      };
    case FETCH_LOCATION_BY_WOEID_FAILED:
      return {
        ...state,
        isError: true,
        isFetching: false,
        isFetched: true,
        woeid: "",
        errorMessage: "Oops! We ran into some problems. Please try again later.",
      };
    default:
      return state;
  }
};

export default reducer;
