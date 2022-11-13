import React from "react";


 
export default function CitySearchEngine() {

return (
<form onSubmit="handleSubmit" id="search">
<div className="search">
  <input type="text"
  className="search-bar"
  placeholder="Search for city"
  onCharge="updateCity"
  autocomplete="off"
  autofocus="on"
  id="search-text-bar"/>
  <button>
  <i className="fa-solid fa-magnifying-glass search-glass" id="glass"></i>
  </button>
</div>
</form>
);
}