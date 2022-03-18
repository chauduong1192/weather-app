import { Selector } from 'redux-testkit';
import * as weatherSelector from '../../../src/redux/weather/selectors';
import { initialState } from '../../../src/redux/weather/reducer';


describe('weather selector', () => {

  it('should select all state in todo', () => {
    const state = {
      weather: initialState
    };
    const result = state.weather;
    Selector(weatherSelector.weatherReducer).expect(state).toReturn(result);
  });
});
