import React from "react";
import WeatherIcon from "./icons";
export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="col">
      <div className="WeatherForecast-day">{day()}</div>
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
  );
}
