import React, { useState } from "react";
import "./Search.css";

export default function WeatherUnitConvertion(prop){
  let [unit , setUnit] = useState("celsius");
   

    function farenheitTemp(event) {
        event.preventDefault();
        setUnit("farenheit");
      }

      function celsiusTemp(event) {
        event.preventDefault();
        setUnit("celsius");
      }

    if(unit === "celsius"){
        return(
            <div>
            <strong className="temp">
              {Math.round(prop.celsius)}
            </strong>
            <span className="unit">
              <a>
                °C
              </a>
              |
              <a href="/" onClick={farenheitTemp}>
                °F
              </a>
            </span>
          </div>
        );

    } else{
        let farenheitTemp = (prop.celsius * 5) / 9 + 32;
        return(
            <div>
            <strong className="temp">
              {Math.round(farenheitTemp)}
            </strong>
            <span className="unit">
              <a href="/" onClick={celsiusTemp}>
                °C
              </a>
              |
              <a>
                °F
              </a>
            </span>
          </div>
        );
    }

 
}