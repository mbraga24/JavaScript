window.addEventListener('load', () => {
  let long;
  let lat;
  
  // Select DOM elements
  const tempDegree = document.querySelector('.temperature-degree');
  const tempDescription = document.querySelector('.temperature-description');
  const locationTimezone = document.querySelector('.location-timezone');
  const temp = document.querySelector('.temperature');
  const tempSpan = document.querySelector('.temperature span');
  const iconCanvas = document.getElementById('icon');



  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat =  position.coords.latitude; 

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/{API-KEY}/${lat},${long}`;

      fetch(api)
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        const data = jsonResponse;
        const { temperature, summary, icon } = data.currently;
        // Assign values to DOM elements
        tempDescription.textContent = summary;
        locationTimezone.textContent = data.timezone.replace(/_/g, " ");
        // Invoke Function
        setIcons(icon, iconCanvas)
        // Convert temperature
        let celsius = (temperature - 32) * (5 / 9); 

        // Change temperature Farenheit to Celsius
        temp.addEventListener('click', function() {
          if (tempSpan.textContent === "F") {
            tempSpan.textContent = "C";
            tempDegree.textContent = Math.floor(celsius);
          } else {
            tempSpan.textContent = "F";
            tempDegree.textContent = temperature;
          }

        });
        console.log(jsonResponse)  
      })
    }) 
  }
  
  function setIcons(icon, iconID) {
    // Skycons Library
    const skycons = new Skycons({color: "white"});
    const myIcon = icon.replace(/-/g,"_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[myIcon]);
  }
});