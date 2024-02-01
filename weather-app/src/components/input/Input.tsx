import React from "react";
import "./input.css";

const UrlOpenWeather = "http://api.weatherapi.com/v1/current.json?";


function InputComponent(){
    return (    
    <div className="inputdiv">
        <input></input>
        <button onClick={doAsyncTask}>Open Weather</button>
    </div>)
}

async function doAsyncTask() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    const url = (
      UrlOpenWeather +
      new URLSearchParams({ "key": "52bc6ebbe13f427f898100750240102", "q": "Dietikon", "api":"no" }
    ))

  
    const result = await fetch(url,requestOptions)
      .then(response => response.json());
      console.log(result);
      };

export {InputComponent}