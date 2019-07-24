let mapElement = document.getElementById("map");

function initMap() {
  let mapOptions = {
    center: {lat: -22.906847, lng: -43.172897},
    zoom: 10
  }

  let map = new google.maps.Map(mapElement, mapOptions)
}
