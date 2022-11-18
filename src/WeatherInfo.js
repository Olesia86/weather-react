import React from "react";
import FormattedDate from "./FormattedDate";
 
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="city">{props.data.city}</h2>
      <h3 className="day">
        <FormattedDate date={props.data.date} />
      </h3>
      <h4 className="description">{props.data.description}</h4>
      <h1>
        <img src={props.data.iconUrl} alt={props.data.description} id="main-icon" />
      </h1>
      <h5>
        <div className="main-temp">{Math.round(props.data.temperature)} C°</div>
      </h5>
      
      <div className="weatherDescription">
        <div className="humidity">Humidity: {props.data.humidity}%</div>
        <div className="wind">Wind: {Math.round(props.data.wind)} km/h</div>
      </div>
    </div>
  );
}