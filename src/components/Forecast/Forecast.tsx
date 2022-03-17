import React from 'react';
import moment from "moment";
import './Forecast.scss';
import { IMAGE_PATH } from '../../utils/constants';
// import { ReactComponent as LC } from '../../assets/images/lc.svg';


export type ForecastProps = {
  dayOfWeek: string;
  maxTemp: number;
  minTemp: number;
  weatherStateAbbr: string;
}

const Forecast: React.FC<ForecastProps> = ({ 
  dayOfWeek,
  maxTemp,
  minTemp,
  weatherStateAbbr,
}) => {
  return (
    <div className="forecast">
      <img src={`${IMAGE_PATH}/${weatherStateAbbr}.svg`} />
      <div className="title">{moment(dayOfWeek).format('dddd')}</div>
      <div>{`Max Temp: ${Math.round(maxTemp)}`}</div>
      <div>{`Max Temp: ${Math.round(minTemp)}`}</div>
    </div>
  );
}

export default Forecast;
