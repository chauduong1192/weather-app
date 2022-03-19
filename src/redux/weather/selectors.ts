import { key } from ".";
import { WeatherState } from "./reducer";

export const weatherReducer = (state): WeatherState => state[key];
