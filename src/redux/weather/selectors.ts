import { key } from '.';
import { WeatherState } from './reducer';
import { ForecastProps as TranformForeCast } from '../../components/Forecast'

export const weatherReducer = (state): WeatherState => state[key];
// export const convertForecast: TranformForeCast = (state): WeatherState => {
//   const list = weatherReducer(state).cityLocations;
//   if(list.length > 0) {
//     return list.map(() =>({
//       dayOfWeek
//     }))
//   }
// };
