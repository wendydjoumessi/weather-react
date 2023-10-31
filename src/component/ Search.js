import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState();
  const [weather, setWeather] = useState({});
  

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
      <div className="d-flex mb-5">
        <input
          type="search"
          placeholder="Enter name of city"
          className="text-box col-9"
          onChange={HandleChange}
          autoFocus="on"
        />
        <input
          type="submit"
          value="submit"
          className="btn btn-submit btn-secondary col-2"
        />
      </div>
        
      </form>
  );

    return (
        
      <div className="container">
        <div className="search">
        <div className="row mb-5 mt-5">
        <div className="col-12">
        <header>Weather Application</header>
      </div>
        </div>
        {form}
        <div className="row">
          <div className="col-6">
            <h3>{city}</h3>
            <p className="date">Sunday 10:31</p>
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
        </div>
        </div>
        <p className="link">
          This project was coded by wendy and it is 
        <a href="https://github.com/wendydjoumessi/weather-react.git" > open source </a>
        
        </p>
       
      </div>
    );
  }



