import { Thunk } from 'redux-testkit';
import * as actions from '../../../src/redux/weather/actions';
import * as wetherTypes from '../../../src/redux/weather/types';
import { getLocationByCity, getLocationByWoeId } from '../../../src/api/weather';
import { locationByWoe, locationByCity, location, errorMessage } from '../../../src/utils/dataMock';

jest.mock('../../../src/api/weather');

describe('weather actions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call action FETCH_LOCATION_BY_CITY_SUCCESS', async () => {
    (getLocationByCity as any).mockReturnValueOnce(locationByCity);
    const dispatches = await Thunk(actions.fetchLocationByCity).execute('San Francisco');

    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: wetherTypes.FETCHING_LOCATION_BY_CITY
    });
    expect(dispatches[1].getAction()).toEqual({
      type: wetherTypes.FETCH_LOCATION_BY_CITY_SUCCESS, payload: locationByCity
    });
  });

  it('should call action FETCH_LOCATION_BY_CITY_FAILED', async () => {
    (getLocationByCity as any).mockRejectedValueOnce(errorMessage);
    const dispatches = await Thunk(actions.fetchLocationByCity).execute('San Francisco');

    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: wetherTypes.FETCHING_LOCATION_BY_CITY
    });
    expect(dispatches[1].getAction()).toEqual({
      type: wetherTypes.FETCH_LOCATION_BY_CITY_FAILED, payload: errorMessage
    });
  });

  it('should call action FETCH_LOCATION_BY_WOEID_SUCCESS', async () => {
    (getLocationByWoeId as any).mockReturnValueOnce(locationByWoe);
    const dispatches = await Thunk(actions.fetchLocationByWoeId).execute('2487956');

    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: wetherTypes.FETCHING_LOCATION_BY_WOEID
    });
    expect(dispatches[1].getAction()).toEqual({
      type: wetherTypes.FETCH_LOCATION_BY_WOEID_SUCCESS, payload: location
    });
  });

  it('should call action FETCH_LOCATION_BY_WOEID_FAILED', async () => {
    (getLocationByWoeId as any).mockRejectedValueOnce(errorMessage);
    const dispatches = await Thunk(actions.fetchLocationByWoeId).execute('00000');

    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: wetherTypes.FETCHING_LOCATION_BY_WOEID
    });
    expect(dispatches[1].getAction()).toEqual({
      type: wetherTypes.FETCH_LOCATION_BY_WOEID_FAILED, payload: errorMessage
    });
  });

  it('should call action SET_EMPTY_LOCATION', () => {
    const dispatches = Thunk(actions.setEmptyLocation).execute();

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual({
      type: wetherTypes.SET_EMPTY_LOCATION,
      payload: []
    });
  });

  it('should call action RESET_INIT_STATE', () => {
    const dispatches = Thunk(actions.resetInitState).execute();

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual({
      type: wetherTypes.RESET_INIT_STATE
    });
  });

});
