import  React  from "react";



export default function Weather(props) {
  return (
    <div className="Weather">
    <h2 className="city">London</h2>
    <h3 className="day">Monday 4 July</h3>
    <h1>
      <img src="./images/sunny.png" alt="Clear" id="main-icon"/>
      </h1>
      <h5>
      <div className="main-temp">23</div>
      </h5>
      </div>
  );
  
}