import React, { useState } from "react";
import axios from "axios";



export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  
  function handelResponse(response) {
    setTemperature(response.data.main.temp);
    console.log(response)
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <h2 className="city">London</h2>
        <h3 className="day">Monday 4 July</h3>
        <h1>
          <img src="./images/sunny.png" alt="Clear" id="main-icon" />
        </h1>
        <h5>
          <div className="main-temp">23</div>
        </h5>
      </div>
    );
  }
  else {
    const apiKey = "tab36a5o3f60c5bc9a40fad2cb676eba";
    let city = "London";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${London}&key=${key}&units=metric`;
    axios.get(apiUri).then(handelResponse);
    return "Loading...";
  }
}