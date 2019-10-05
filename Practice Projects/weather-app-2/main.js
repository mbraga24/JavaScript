let appId = "80372582170757a441a237d9c1f38ad2";
let units = "imperial";
let searchMethod;
let weatherDescriptionHeader = document.getElementById("weatherDescriptionHeader");
let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("windSpeed");
let humidity = document.getElementById("humidity");
let cityHeader = document.getElementById("cityHeader");
let iconImage = document.getElementById("documentIconImg");

function getSearchMethod(searchTerm) {
  if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm ) {
    searchMethod = 'zip';
  } else {
    searchMethod = 'q';
  }
}

function searchWeather(searchTerm) { 
  getSearchMethod(searchTerm);
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
  .then(response => { 
    return response.json()
  }).then(jsonResponse => {
    init(jsonResponse)
  })
}

function init(results) {
  // set background image.
  setBackGround(results)
  // set and display content on page.
  displayContent(results);
  // set the position of all the content.
  setWeatherContentPosition();

  console.log(results)
}

let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

// event listener on click.
searchButton.addEventListener("click", function() {
  checkSearchWeather(searchInput.value)
})

// event listener on keyup.
window.document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    checkSearchWeather(searchInput.value)
  }
})

function displayContent(results) {
  iconImage.src = 'http://openweathermap.org/img/wn/' + results.weather[0].icon + ".png";

  let resultDescription = results.weather[0].description;
  weatherDescriptionHeader.textContent = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

  let resultTemperature = results.main.temp;
    // degree symbol using hexadecimal code.
  temperature.textContent = Math.floor(resultTemperature) + "\xB0";
  // temperature.append((Math.floor(resultTemperature)) + '&#8451;');

  let resultWind = results.wind.speed;
  windSpeed.textContent = "Winds at " + resultWind + " m/s";

  let resultHumidity = results.main.humidity;
  humidity.textContent = "Humidity levels at " + resultHumidity;

  let resultCityName = results.name;
  cityHeader.textContent = resultCityName.toLowerCase()
                                         .split(" ")
                                         .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                                         .join(" ");
}

function setWeatherContentPosition() {
   let weatherContainer = document.getElementById("weatherContainer");
   let weatherContainerHeight = weatherContainer.clientHeight;
   let weatherContainerWidth = weatherContainer.clientWidth;

   weatherContainer.style.left = `calc(50% - ${weatherContainerWidth / 2}px)`;
   weatherContainer.style.top = `calc(50% - ${weatherContainerHeight / 1.3}px)`;
   weatherContainer.style.visibility = 'visible';
}

function setBackGround(results) {
  switch (results.weather[0].main) {
    case 'Clear':
      document.body.style.backgroundImage = "url('clear.jpg')";
      break;
    case 'Rain':
    case 'Mist':
    case 'Drizzle':
      document.body.style.backgroundImage = "url('rain.jpg')";
      break;
    case 'Snow':
      document.body.style.backgroundImage = "url('snow.jpg')";
      break;
     case 'Clouds':
      document.body.style.backgroundImage = "url('clouds.jpg')";
      break;
    case 'Thunderstorm':
      document.body.style.backgroundImage = "url('storm.jpg')";
      break;
    default:
      break;
  }
}

function checkSearchWeather(searchTerm) {
    if (searchTerm) {
      searchWeather(searchTerm)
    }
}