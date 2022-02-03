import React from "react";
import WeatherIcon from "./icons";
export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">{props.data.dt}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">
              {Math.round(props.data.temp.min)}° |
            </span>
            <span className="WeatherForecast-temperature-max">
              <strong> {Math.round(props.data.temp.max)}°</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
