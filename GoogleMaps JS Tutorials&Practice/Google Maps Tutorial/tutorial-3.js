const elementMap = document.getElementById("map");

function initMap() {

  const location = {lat: 40.712776, lng: -74.005974};

  let mapOptions = {
    zoom: 11,
    center: location 
  }

  let map = new google.maps.Map(elementMap, mapOptions)
  let marker = new google.maps.Marker({
    position: location,
    map: map
  })
}