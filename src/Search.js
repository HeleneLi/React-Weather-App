import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [response, setResponse] = useState("");
  let [weather, setWeather] = useState({});

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bde4594240bbd5634acfce653024105f&units=metric`;
    axios.get(url).then(displayWeatherData);
  }

  function updateQuery(event) {
    setCity(event.target.value);
  }

  function displayWeatherData(response) {
    setResponse(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search for city..."
        onChange={updateQuery}
      />
      <input type="submit" value="Search" />
    </form>
  );

  let weather_des = (
    <div className="weather_des">
      <p>Temperature: {Math.round(weather.temperature)}°C</p>
      <p>Weather: {weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {Math.round(weather.wind)}km/h</p>
      <p>
        <img src={weather.icon} alt={weather.description} />
      </p>
    </div>
  );
  if (response) {
    return (
      <div>
        {form}
        {weather_des}
      </div>
    );
  } else {
    return form;
  }
}
