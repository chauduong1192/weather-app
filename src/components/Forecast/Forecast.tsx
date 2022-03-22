import React from "react";
import moment from "moment";
import LazyImage from "../LazyImage";
import { IMAGE_PATH } from "../../utils/constants";
import "./Forecast.scss";

export type ForecastProps = {
  dayOfWeek: string;
  maxTemp: number;
  minTemp: number;
  weatherStateAbbr: string;
  theTemp: number;
  weaTherState?: string;
  title?: string;
};

const Forecast: React.FC<ForecastProps> = ({
  dayOfWeek,
  maxTemp,
  minTemp,
  weatherStateAbbr,
}) => {
  return (
    <div className="forecast">
      <LazyImage
        aspectRatio={1}
        src={`${IMAGE_PATH}/${weatherStateAbbr}.svg`}
      />
      <div className="title">{moment(dayOfWeek).format("dddd")}</div>
      <div className="temp">{`Min Temp: ${Math.round(minTemp)}`}&deg;C</div>
      <div className="temp">{`Max Temp: ${Math.round(maxTemp)}`}&deg;C</div>
    </div>
  );
};

export default Forecast;
