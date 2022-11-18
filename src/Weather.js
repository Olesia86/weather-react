import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
  console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name
    });
  } 
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCitySearch(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "49299905f177ecc5c9f1da6f89238e56";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
      <form onSubmit={handleSubmit} id="search">
<input type="text"
  className="search-bar"
  placeholder="Search for city"
  onCharge={handleCitySearch}
  autocomplete="off"
  autofocus="on"
  id="search-text-bar" />
   <input type="submit" className="button" value="🔍" />
        </form >
        <WeatherInfo data={weatherData} />
   </div>
    );
  }
  else {
    search();
    
  }
}