type LocationResponse = {
  title: string;
  location_type: string;
  latt_long: string;
  woeid: number;
  distance: number;
};

type ConsolidatdWetherType = {
  id: number;
  applicable_date: string;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction: number;
  wind_direction_compass: number;
  wind_speed: number;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
};

type ParentType = {
  title: string;
  location_type: string;
  latt_long: string;
  woeid: number;
};

type LocationWoeResponse = {
  title: string;
  location_type: string;
  latt_long: string;
  time: string;
  sun_: string;
  timezone_name: string;
  parent: ParentType[];
  consolidated_weather: ConsolidatdWetherType[];
  sources: {
    title: string;
    url: string;
  };
};

export type { LocationResponse, LocationWoeResponse };
