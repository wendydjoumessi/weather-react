import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState();
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function HandleSubmit(event) {
    event.preventDefault();
    if (city) {
      let key = "53f3bc1f5d348c44be3e3754c7185573";
      let units = "metric";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;
      axios.get(url).then(DisplayWeather);
      console.log(temperature);
    } else {
      alert("enter the name of a city");
    }
  }

  function DisplayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function HandleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function farenheitTemp(event) {
    event.preventDefault();
    let farenheitTemperature = (weather.temperature * 5) / 9 + 32;
    setTemperature(Math.round(farenheitTemperature));
  }

  function celsiusTemp(event) {
    event.preventDefault();
    return setTemperature(weather.temperature);
  }

  let form = (
    <form onSubmit={HandleSubmit}>
      <div className="col d-flex mb-5">
        <input
          type="search"
          placeholder="Enter name of city"
          className="text-box"
          onChange={HandleChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn btn-submit"
        />
      </div>
        
      </form>
  );

  let githubLink = <a href="https://github.com/wendydjoumessi/weather-react.git" className="link">open source</a>;

 
    return (
        
      <div className="container">
        <div className="row mb-5 mt-5">
        <div className="col-12">
        <header>Weather Application</header>
      </div>
        </div>
        {form}
        <div className="row">
          <div className="col-6">
            <h3>{city}</h3>
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Description : {weather.description}</li>
              <li>Speed :{weather.wind}km/h</li>
            </ul>
          </div>
          <div className="col-6 ">
            <img
              src={weather.icon}
              alt={weather.description}
              className="image"
            />
            <div>
              <strong className="temp">
                {Math.round(weather.temperature)}
              </strong>
              <span className="unit">
                <a href="/" onClick={celsiusTemp}>
                  °C
                </a>
                |
                <a href="/" onClick={farenheitTemp}>
                  °F
                </a>
              </span>
            </div>
          </div> 
          <a href="https://github.com/wendydjoumessi/weather-react.git" className="link">open source</a>
        </div>
      </div>
    );
  }



