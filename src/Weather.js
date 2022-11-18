import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";



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
      date: new Date(response.data.dt),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}10d@2x.png`,
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
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
      <form onSubmit={handleSubmit} id="search">
<input type="search"
  className="search-bar"
            placeholder="Search for city"
            autofocus="on"
       onCharge={handleCitySearch} id="search-text-bar" />
          <input type="submit" className="button" value="Search" />
          </form >
          <WeatherInfo data={weatherData} />
   </div>
    );
  }
  else {
    search();
    
  }
}