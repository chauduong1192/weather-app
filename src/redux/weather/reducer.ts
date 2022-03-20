import { GenericStoreAction } from "../types";
import { LocationResponse as LocationProps } from "../../api/weather/type";

import {
  FETCHING_LOCATION_BY_CITY,
  FETCH_LOCATION_BY_CITY_SUCCESS,
  FETCH_LOCATION_BY_CITY_FAILED,
  SET_EMPTY_LOCATION,
  FETCHING_LOCATION_BY_WOEID,
  FETCH_LOCATION_BY_WOEID_SUCCESS,
  FETCH_LOCATION_BY_WOEID_FAILED,
  RESET_INIT_STATE,
} from "./types";

import { ForecastProps } from "../../components/Forecast";

export type WeatherState = {
  isFetchingCity: boolean;
  isFetched: boolean;
  isFetchingWoe: boolean;
  isError: boolean;
  errorMessage: string;
  locationSuggestions: LocationProps[];
  woeLocations: ForecastProps[];
};

export const initialState = {
  isFetchingCity: false,
  isFetched: false,
  isFetchingWoe: false,
  isError: false,
  errorMessage: "",
  locationSuggestions: [],
  woeLocations: [],
};

const reducer = (
  state: WeatherState = initialState,
  action: GenericStoreAction
) => {
  switch (action.type) {
    case FETCHING_LOCATION_BY_CITY:
      return {
        ...state,
        isFetchingCity: true,
        isFetched: false,
        isFetchingWoe: false,
        isError: false,
        errorMessage: "",
        woeLocations: [],
      };
    case FETCH_LOCATION_BY_CITY_SUCCESS:
      return {
        ...state,
        isFetchingCity: false,
        isFetched: true,
        isFetchingWoe: false,
        locationSuggestions: action.payload,
      };
    case FETCH_LOCATION_BY_CITY_FAILED:
      return {
        ...state,
        isError: true,
        isFetchingCity: false,
        isFetched: true,
        isFetchingWoe: false,
        errorMessage: action.payload,
      };
    case FETCHING_LOCATION_BY_WOEID:
      return {
        ...state,
        isFetchingCity: false,
        isFetched: true,
        isFetchingWoe: true,
        woeLocations: [],
      };
    case FETCH_LOCATION_BY_WOEID_SUCCESS:
      return {
        ...state,
        isFetchingCity: false,
        isFetched: true,
        isFetchingWoe: false,
        woeLocations: action.payload,
      };
    case FETCH_LOCATION_BY_WOEID_FAILED:
      return {
        ...state,
        isError: true,
        isFetchingCity: false,
        isFetched: false,
        isFetchingWoe: false,
        errorMessage:
          "Oops! We ran into some problems. Please try again later.",
      };
    case SET_EMPTY_LOCATION:
      return {
        ...state,
        locationSuggestions: action.payload,
      };
    case RESET_INIT_STATE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
