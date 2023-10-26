
import React from 'react';
import axios from 'axios';
import './App.css';
import { Oval} from "react-loader-spinner";

function App(prop) {

  function handle(response){
    alert(`the temperature in ${response.data.name} is ${response.data.main.temp}°C `)
  }
  let key = "53f3bc1f5d348c44be3e3754c7185573";
 
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${prop.city}&appid=${key}&units=${units}`;
  axios.get(url).then(handle);
  return (
    <Oval
    height={80}
    width={80}
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#4fa94d"
    strokeWidth={2}
    strokeWidthSecondary={2}
      
    />
  );
}

export default App;
