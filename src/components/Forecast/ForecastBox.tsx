import React from "react";
import "./Forecast.scss";
import { ForecastProps, Forecast } from "../Forecast";

type ForeBoxProps = {
  woeLocations: ForecastProps[];
};
const ForecastBox: React.FC<ForeBoxProps> = ({ woeLocations }) => {
  if (!woeLocations.length) {
    return <div>Empty Data</div>;
  }

  return (
    <div className="forecast-box">
      {woeLocations.map((woe) => (
        <Forecast {...woe} key={woe.dayOfWeek} />
      ))}
    </div>
  );
};

export default ForecastBox;
