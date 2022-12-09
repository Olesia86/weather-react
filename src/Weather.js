import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";



export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
  
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
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
    let apiKey = "1c28ad1c714e36e7ae4efd89bb91230a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
      <form onSubmit={handleSubmit} id="search">
        <input type="search"
  className="search-bar"
            placeholder="Search for city"
            autoFocus="on"
            onChange={handleCitySearch} id="search-text-bar" />
          <input type="submit" className="button" value="Search" />
          </form >
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
   </div>
    );
  }
  else {
    search();
    
  }
}