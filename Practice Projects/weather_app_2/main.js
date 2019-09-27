

const appId = "bc54e39e5bf49814e59fb2b3f8ab06d6";
const units = "imperial";
let searchMethod = "zip";

function searchWeather(searchTerm) { 
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID={appId}&units=${units}`)
    .then(response => {
      return response.json()
    })
    .then(jsonResponse => {
      init(jsonResponse)
    })
}

function init(jsonResponse) {
  console.log(jsonResponse)
}