import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import WeatherDescription from "./WeatherDescription";
import Forecast from "./Forecast";
import CitySearchEngine from "./CitySearchEngine";

export default function App() {
  
  return (
    <div className="App">
  <div className="container">
<CitySearchEngine />
  <Weather />
  <WeatherDescription />
  <br />
  <Forecast />
  </div>
</div>
);
}



