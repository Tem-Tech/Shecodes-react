import { Axios } from "axios";
import React from "react";
import WeatherIcon from "./icons";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.data.lon;
  let latitude = props.data.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  Axios.get(apiUrl).then(handleResponse);
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
