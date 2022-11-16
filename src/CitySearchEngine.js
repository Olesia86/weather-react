
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
        id="search-text-bar" />
      <input type="submit" className="button" value="🔍" />
  </div>
</form>
);
}