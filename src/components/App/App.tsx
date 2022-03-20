import React from "react";

import SearchForm from "../SearchForm";
import ForecastBox, { ForecastProps } from "../Forecast";
import GeneralForecast from "../GeneralForecast";
import ForeCastLoader from "../ForeCastLoader";
import "./App.scss";

type AppProps = {
  isFetchingWoe: boolean;
  isFetched: boolean;
  woeLocations: ForecastProps[];
};

const App: React.FC<AppProps> = ({
  isFetchingWoe,
  isFetched,
  woeLocations,
}) => {
  const isShowForeCast = isFetched && woeLocations.length > 0;

  return (
    <main className="weather-app container">
      <h1 className="mb-4">
        {" "}
        <span>Weather</span> Forecast
      </h1>
      <div className="row weather-box">
        {isShowForeCast && (
          <div className="left-side col-md-3 col-sm-4 col-12">
            <GeneralForecast {...woeLocations[0]} />
          </div>
        )}
        <div
          className={`right-side ${
            isShowForeCast && "col-md-9 col-sm-8"
          } col-12`}
        >
          <SearchForm />
          {isShowForeCast && (
            <ForecastBox woeLocations={woeLocations.slice(1)} />
          )}
          {isFetchingWoe && <ForeCastLoader />}
        </div>
      </div>
    </main>
  );
};

export default App;
