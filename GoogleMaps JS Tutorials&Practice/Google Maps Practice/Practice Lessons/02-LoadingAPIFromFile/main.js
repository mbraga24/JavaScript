let map;

function initMap() {
  let mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(40.783058, -73.971252)
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions)

  google.maps.event.addDomListener(window, 'load', initMap)
}

// This code provides the injection of the script tag.
function loadTheMap() {
  let script = document.createElement('script'); 
  script.type = 'text/javascript';
  // script.src = ADD URL HERE
  document.body.appendChild(script);
}

// Load the map once the webpage is fully loaded.
window.onload = loadTheMap;