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
      date: new Date(response.data.coord.dt),
      iconUrl: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.main.name
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