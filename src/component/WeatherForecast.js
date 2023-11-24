import React , { useState , useEffect} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(prop){
  let [loaded,setLoaded] = useState(false);
  let [forecast,setForecast] = useState(null);
  
  useEffect(() => {
    setLoaded(false)
  }, [prop.coordinates]);


    function handleResponse(response){
      setForecast(response.data.daily);
      setLoaded(true);
      }
   
if(loaded){
  return(
    <div className="weatherForecast">
    <div className="row">
      {forecast.map(function(dailyForecast, index){
        if(index < 5){
        return(
          <div className="col forecast" key={index}>
          <WeatherForecastDay data={dailyForecast} />
          </div>
        );
      }
      return null;
      })}
    
        </div>
    </div>

)

}else{
  let key = "53f3bc1f5d348c44be3e3754c7185573";
  let latitude = prop.coordinates.lat;
  let longitude = prop.coordinates.lon;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
  axios.get(url).then(handleResponse);

  return null;
}
 
}