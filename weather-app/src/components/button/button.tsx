import React from "react";

const UrlOpenWeather = "https://api.openweathermap.org/data/2.5/weather"

function SubmitButton() {
    doAsyncTask().then((data) => {
        console.log(data);
    })
    return (
        <div>
            <button onClick={doAsyncTask}>Open Weather</button>
        </div>
    )
};

async function doAsyncTask() {
    const url = (
      UrlOpenWeather +
      new URLSearchParams({ "q": "1", "appid": "2173ae4a43c4f03c3a3ea3530ae341cc" }
    ))
  
    const result = await fetch(url)
      .then(response => response.json());
  };



export {SubmitButton}