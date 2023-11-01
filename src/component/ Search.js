import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import FormattedDate from "./FormattedDate "; 
import WeatherIcon from "./WeatherIcon"; 
import WeatherUnitConvertion from "./weatherUnitConvertion";
import "./Search.css";

export default function Search(prop) {
  let [city, setCity] = useState("Tokyo");
  const [weather, setWeather] = useState({ready : false});

  function HandleSubmit(event) {
    event.preventDefault();
    if (city) {
      let key = "53f3bc1f5d348c44be3e3754c7185573";
      let units = "metric";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`;
      axios.get(url).then(DisplayWeather);
    } else {
      alert("enter the name of a city");
    }
  }

  function DisplayWeather(response) {
    console.log(response)
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      Date: new Date(response.data.dt * 1000),
      City: response.data.name
    });
  }

  function HandleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
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
if(weather.ready){
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
            <h3 className="text-capitalize">{weather.City}</h3>
            <p className="date"><FormattedDate date = {weather.Date}/></p>
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Description : {weather.description}</li>
              <li>Speed :{weather.wind}km/h</li>
            </ul>
          </div>
          <div className="col-6 ">
            <WeatherIcon code = {weather.icon} />

            <WeatherUnitConvertion celsius = {Math.round(weather.temperature)}/>
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
  else{
    let key = "53f3bc1f5d348c44be3e3754c7185573";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${key}&units=${units}`;
    axios.get(url).then(DisplayWeather);
    return (
      <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    );
  }
  }



