let map;

function initMap() {
  let mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(40.783058, -73.971252)
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions)

  google.maps.event.addDomListener(window, 'load', initMap)
}
