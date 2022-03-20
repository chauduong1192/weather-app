import React from "react";
import moment from "moment";
import LazyImage from "../LazyImage";
import { IMAGE_PATH } from "../../utils/constants";
import { ForecastProps } from "../Forecast";
import { ReactComponent as PinMap } from "../../assets/images/pin.svg";
import "./GeneralForecast.scss";

const GeneralForecast: React.FC<ForecastProps> = ({
  dayOfWeek,
  weatherStateAbbr,
  theTemp,
  weaTherState,
  title,
}) => {
  return (
    <div className="general-forecast">
      <div>
        <h2 className="day-of-week">{moment(dayOfWeek).format("dddd")}</h2>
        <h3 className="address">
          <PinMap /> {title}
        </h3>
      </div>
      <div>
        <LazyImage
          aspectRatio={1}
          src={`${IMAGE_PATH}/${weatherStateAbbr}.svg`}
        />
        <h4 className="temp">{`${Math.round(theTemp)}`}&deg;C</h4>
        <h5 className="weather-state">{weaTherState}</h5>
      </div>
    </div>
  );
};

export default GeneralForecast;
