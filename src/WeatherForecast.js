import React from "react";
import WeatherIcon from "./icons";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-min">10°</span>
            <span className="WeatherForecast-temperature-max">
              <strong>19°</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
