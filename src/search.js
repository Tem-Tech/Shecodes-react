import React, { useState } from "react";
import Conditions from "./condition";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function SearchForm() {
  let [report, setReport] = useState({ ready: false });
  let [city, setCity] = useState("");

  function weatherReport(response) {
    setReport({
      ready: true,
      coordinates: response.data.coord,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      country: response.data.sys.country,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      date: new Date(response.data.dt * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function cityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "2f77a721f146c97e77d99956a2de9fe0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherReport);
  }
  if (report.ready) {
    return (
      <div>
        <Conditions data={report} />
        <form id="city-search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search City Here..."
            className="form-control"
            id="search-input"
            onChange={cityChange}
          />
          <input type="submit" value="🔍" className="form-btn" />
          <input type="submit" value="📌" className="form-btn" />
        </form>
        <h3>This week...</h3>
        <WeatherForecast
          coordinates={report.coordinates}
          lat={report.lat}
          lon={report.lon}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h5>
          What is your city?{" "}
          <span role="img" aria-label="emoji">
            🧐
          </span>
        </h5>

        <form id="city-search" onSubmit={handleSubmit}>
          <input
            type="search"
            g
            placeholder="Search City Here..."
            className="form-control"
            id="search-input"
            onChange={cityChange}
          />
          <input type="submit" value="🔍" className="form-btn" />
          <input type="submit" value="📌" className="form-btn" />
        </form>
      </div>
    );
  }
}
