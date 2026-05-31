import "./App.css";
import { WiDaySunny } from "react-icons/wi";
import { useState } from "react";

function App() {
  let [wdata,setWdata]=useState()
  let [cityname,setCityname]=useState("");
let getdata = () => {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=961be9f6cb4e446fb72193318263005&q=${cityname}`
  )
    .then((res) => res.json())
    .then((data) => {
      setWdata(data);
    });
    
};
 console.log(wdata);
  return (
    <div className="weather-app">
      <div className="weather-container">

        <h1>Weather Forecast</h1>
        <p className="subtitle">
          Check current weather conditions around the world
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={cityname}
            onChange={(e)=>setCityname(e.target.value)}
          />
          <button onClick={getdata}>Search</button>
        </div>

        <div className="weather-card">
          {wdata!=undefined
          ?
          <>
          <div className="weather-icon">
          <img src={wdata.current.condition.icon} />
          </div>

          <h2>{wdata.location.name}</h2>

          <h3>{wdata.current.temp_c}°C</h3>

          <p className="condition">{wdata.current.condition.text}</p>

          <div className="weather-details">
            <div>
              <span>Humidity</span>
              <h4>{wdata.current.humidity}%</h4>
            </div>

            <div>
              <span>Wind</span>
              <h4>{wdata.current.wind_kph} km/h</h4>
            </div>

            <div>
              <span>Feels Like</span>
              <h4>{wdata.current.feelslike_c}°C</h4>
            </div>
          </div>
          </>
          :
          <h1 style={{color:"red"}}>No data found</h1>
          }
          
        </div>

      </div>
    </div>
  );
}

export default App;