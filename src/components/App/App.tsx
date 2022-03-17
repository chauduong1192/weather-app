import React from 'react';

import SearchForm from '../SearchForm';
import NotFound from '../NotFound';
import ForecastBox from '../Forecast';
import ForeCastLoader from '../ForeCastLoader';
import { WeatherState } from '../../redux/weather/reducer';
import './App.scss';

type AppProps = WeatherState;
const App: React.FC<AppProps> = ({
  isFetching,
  isFetched,
  isError,
  errorMessage,
  woeLocations,
}) => {
  const isShowForeCast = isFetched && (woeLocations.length > 0);

  return (
    <div className="weather-app container">
      <h1 className="mb-4"> <span>Weather</span> Forecast</h1>
      <div className="weather-box">
        <SearchForm />
        { isError && errorMessage && <NotFound message={errorMessage} /> }
        { isShowForeCast && <ForecastBox woeLocations={woeLocations}/> }
        { isFetching && <ForeCastLoader /> }
      </div>
    </div>
  );
}

export default App;
