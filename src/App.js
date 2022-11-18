import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Forecast from "./Forecast";





export default function App() {
  
  return (
    <div className="App">
      <div className="Container">
        <br />
        <Weather defaultCity="London" />
        
        <br />
        <Forecast />
        </div>
    <div className="link">
    <a href="https://github.com/Olesia86/weather-react">Open source</a>
      </div>
      </div>
  );
}



