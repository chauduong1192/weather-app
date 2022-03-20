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
      isFetchingCity: true,
      isFetched: false,
      woeid: action.payload,
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle FETCH_LOCATION_BY_CITY_SUCCESS_WITH_EMPTY', () => {
    const action = { type: wetherTypes.FETCH_LOCATION_BY_CITY_SUCCESS_WITH_EMPTY };
    const result = {
      ...initialState,
      isFetchingCity: false,
      isFetched: false,
      isError: true,
      woeid: "",
      errorMessage: "City is not found. Please try to enter another city.",
      woeLocations: [],
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
      errorMessage: errorMessage,
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
      isFetchingCity: true,
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
      isFetched: true,
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
      isFetched: true,
      woeid: "",
      errorMessage: "Oops! We ran into some problems. Please try again later.",
    };
    Reducer(weatherReducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });
});
