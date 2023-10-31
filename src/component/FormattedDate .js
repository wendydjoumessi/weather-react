import React from "react";


export default function FormattedDate(Timestamp){
    let minutes= Timestamp.date.getMinutes();
    let Hours = Timestamp.date.getHours();
    let days = ["Sunday"," Monday", "Tuesday" , "Wednesday" , "Thursday", "Friday" , "Saturday" , "Sunday"]
    let day = days[Timestamp.date.getDay()];

    if(minutes < 10){
        minutes = `0${minutes}`;
    }

    if(Hours < 10){
        Hours = `0${Hours}`;
    }
    return <div>
        {day}  {Hours} : {minutes}
    </div>
}