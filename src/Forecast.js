import React, { useState }  from "react";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";
import axios from "axios";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function day() {
    let date = new Date(props.data.dt[0] * 1000);
    let day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  
    return days[day];
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <p className="days">Next 6 days forecast</p>
        <div className="row">
          <div className="col-2" id="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">{day()}</h6>
                <p className="card-text">{forecast[0].weather[0].description}</p>
                <p className="temp">{Math.round(forecast[0].temp.day)}°C</p>
                <p>
                  <WeatherIcon code={forecast[0].weather[0].icon} alt="Clear" size={36} className="icon" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">{forecast[1].dt}</h6>
                <p className="card-text">{forecast[1].weather[0].description}</p>
                <p className="temp">{Math.round(forecast[1].temp.day)}°C</p>
                <p>
                  <WeatherIcon code={forecast[1].weather[0].icon} alt="Sunny" size={36} className="icon" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">{forecast[2].dt}</h6>
                <p className="card-text">{forecast[2].weather[0].description}</p>
                <p className="temp">{Math.round(forecast[2].temp.day)}°C</p>
                <p>
                  <WeatherIcon code={forecast[2].weather[0].icon} alt="Cloudy" size={36} className="icon" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">{forecast[3].dt}</h6>
                <p className="card-text">{forecast[3].weather[0].description}</p>
                <p className="temp">{Math.round(forecast[3].temp.day)}°C</p>
                <p>
                  <WeatherIcon code={forecast[3].weather[0].icon} alt="Rain" size={36} className="icon" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">{forecast[4].dt}</h6>
                <p className="card-text">{forecast[4].weather[0].description}</p>
                <p className="temp">{Math.round(forecast[4].temp.day)}°C</p>
                <p>
                  <WeatherIcon code={forecast[4].weather[0].icon} alt="Sunny" size={36} className="icon" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">{forecast[5].dt}</h6>
                <p className="card-text">{forecast[5].weather[0].description}</p>
                <p className="temp">{Math.round(forecast[5].temp.day)}°C</p>
                <p>
                  <WeatherIcon code={forecast[5].weather[0].icon} alt="Rain" size={36} className="icon" />
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
    else {
  let apiKey = "1c28ad1c714e36e7ae4efd89bb91230a";
  let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
    return null;
    }
  }
