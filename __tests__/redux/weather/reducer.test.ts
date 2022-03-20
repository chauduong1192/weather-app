import { Reducer } from 'redux-testkit';
import weatherReducer, { initialState } from '../../../src/redux/weather/reducer';
import * as wetherTypes from '../../../src/redux/weather/types';
import { locationByCity, location, errorMessage } from '../../../src/utils/dataMock';

describe('weather reducer', () => {

  it('should handle FETCHING_LOCATION_BY_CITY', () => {
    const action = { type: wetherTypes.FETCHING_LOCATION_BY_CITY };
    const result = {
      ...initialState,
      isFetchingCity: true,
      isFetched: false,
      isFetchingWoe: false,
      isError: false,
      errorMessage: "",
      woeLocations: [],
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle FETCH_LOCATION_BY_CITY_SUCCESS', () => {
    const action = { type: wetherTypes.FETCH_LOCATION_BY_CITY_SUCCESS, payload: locationByCity };
    const result = {
      ...initialState,
      isFetchingCity: false,
      isFetched: true,
      isFetchingWoe: false,
      locationSuggestions: action.payload,
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle FETCH_LOCATION_BY_CITY_FAILED', () => {
    const action = { type: wetherTypes.FETCH_LOCATION_BY_CITY_FAILED, payload: errorMessage };
    const result = {
      ...initialState,
      isError: true,
      isFetchingCity: false,
      isFetched: true,
      isFetchingWoe: false,
      errorMessage: action.payload,
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle FETCHING_LOCATION_BY_WOEID', () => {
    const action = { type: wetherTypes.FETCHING_LOCATION_BY_WOEID };
    const result = {
      ...initialState,
      isFetchingCity: false,
      isFetched: true,
      isFetchingWoe: true,
      woeLocations: [],
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle FETCH_LOCATION_BY_CITY_SUCCESS', () => {
    const action = { type: wetherTypes.FETCH_LOCATION_BY_WOEID_SUCCESS, payload: location };
    const result = {
      ...initialState,
      isFetchingCity: false,
      isFetched: true,
      isFetchingWoe: false,
      woeLocations: action.payload,
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle FETCH_LOCATION_BY_WOEID_FAILED', () => {
    const action = { type: wetherTypes.FETCH_LOCATION_BY_WOEID_FAILED, payload: errorMessage };
    const result = {
      ...initialState,
      isError: true,
      isFetchingCity: false,
      isFetched: false,
      isFetchingWoe: false,
      errorMessage:
        "Oops! We ran into some problems. Please try again later.",
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle SET_EMPTY_LOCATION', () => {
    const action = { type: wetherTypes.SET_EMPTY_LOCATION, payload: [] };
    const result = {
      ...initialState,
      locationSuggestions: action.payload,
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });
  it('should handle RESET_INIT_STATE', () => {
    const action = { type: wetherTypes.RESET_INIT_STATE, payload: initialState };
    const result = initialState;
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });
});
