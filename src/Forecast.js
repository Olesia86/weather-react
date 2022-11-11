import React from "react";



export default function Forecast() {
  return (
    <div className="Forecast">
    <p className="days">Next 6 days forecast</p>
    <div className="row">
      <div className="col-2" id="col">
    <div className="card">
     <div className="card-body">
        <h6 className="card-title">Tue 5 July</h6>
        <p className="card-text">Partly cloudy</p>
        <p className="temp">23°C</p>
        <p>
    <img src="./images/clouds.png" alt="Clear" className="icon"/>
    </p>
      </div>
      </div>
      </div>
    <div className="col-2">
    <div className="card">
    <div className="card-body">
       <h6 class="card-title">We 6 July</h6>
      <p className="card-text">Partly cloudy</p>
      <p className="temp">24°C</p>
   <p>
    <img src="./images/cloudy-day.png" alt="Sunny" className="icon"/>
     </p>
      </div>
       </div>
      </div>
  <div className="col-2">
    <div className="card">
     <div className="card-body">
  <h6 className="card-title">Thu 7 July</h6>
   <p className="card-text">Partly cloudy</p>
    <p className="temp">25°C</p>
      <p>
    <img src="./images/cloudy.png" alt="Cloudy" className="icon"/>
      
     </p>
    </div>
    </div> 
      </div>
      <div className="col-2">
     <div className="card">
     <div className="card-body">
      <h6 className="card-title">Fri 8 July</h6>
     <p className="card-text">Partly cloudy</p>
     <p className="temp">26°C</p>
      <p>
     <img src="./images/rainy-day.png" alt="Rain" className="icon"/>
    </p>
     </div>
     </div>
     </div> 
     <div className="col-2">
    <div className="card">
    <div className="card-body">
   <h6 className="card-title">Sat 9 July</h6>
   <p className="card-text">Partly cloudy</p>
   <p className="temp">28°C</p>
   <p>
   <img src="./images/storm-day.png" alt="Sunny" className="icon"/>
    </p>
   </div>
   </div>
  </div> 
   <div className="col-2">
    <div className="card">
   <div className="card-body">
    <h6 className="card-title">Sun 10 July</h6>
     <p className="card-text">Partly cloudy</p>
     <p className="temp">28°C</p>
     <p>
   <img src="./images/sunny.png" alt="Rain" className="icon"/>
    </p>
      </div>
     </div>
    </div> 
    </div>

</div>
);
}