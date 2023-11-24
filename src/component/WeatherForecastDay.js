import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(prop){
    function max(){
        let temperature = Math.round(prop.data.temp.max);
        return `${temperature}°`;
    }

    function min(){
        let temperature = Math.round(prop.data.temp.min);
        return `${temperature}°`;
    }

    function day(){
        let date = new Date(prop.data.dt *1000);
        let day = date.getDay();

        let days = ["sun","Mon", "Tue" ,"Wed", "Thu","Fri","sat"]

        return days[day];
    }
    return(
    <div>
          <div className="weatherForecast-day">
            {day()}
          </div>
          <div>
          <WeatherIcon code ={prop.data.weather[0].icon} size={40} />
          </div>
          <div className="weatherForecast-temperature">
            <span className="weatherForecast-temperature-max">
           {max()}
            </span>
            <span className="weatherForecast-temperature-min">
            {min()}
            </span>
        </div>
        </div>
    )
}