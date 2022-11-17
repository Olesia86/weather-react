import React, { useState } from "react";
import axios from "axios";



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  
  
  function handelResponse(response) {
  console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: "Monday 10:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h2 className="city">{weatherData.city}</h2>
        <h3 className="day">{weatherData.date}</h3>
        <h4 className="description">{weatherData.description}</h4>
        <h1>
          <img src={weatherData.iconUrl} alt={weatherData.description} id="main-icon" />
        </h1>
        <h5>
          <div className="main-temp">{Math.round(weatherData.temperature)} C°</div>
        </h5>
      
       <div className="weatherDescription">
          <div className="humidity">Humidity: {weatherData.humidity}%</div>
          <div className="wind">Wind: {Math.round(weatherData.wind)} km/h</div>
        </div>
        </div>
    );
  }
  else {
    const apiKey = "49299905f177ecc5c9f1da6f89238e56";
    
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handelResponse);
    return "Loading...";
  }
}