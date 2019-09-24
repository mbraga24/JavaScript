window.addEventListener('load', () => {
  let long;
  let lat;

  const tempDegree = document.querySelector('.temperature-degree');
  const tempDescription = document.querySelector('.temperature-description');
  const locationTimezone = document.querySelector('.location-timezone');


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat =  position.coords.latitude; 

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/1996589e158984edb20e5bb66e89d2ca/${lat},${long}`;

      fetch(api)
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        const data = jsonResponse;
        const { temperature, summary, icon } = data.currently;
        tempDegree.textContent = temperature;
        tempDescription.textContent = summary;
        locationTimezone.textContent = data.timezone.replace(/_/i, " ");

        console.log(jsonResponse)

      })
    }) 
  } 
});