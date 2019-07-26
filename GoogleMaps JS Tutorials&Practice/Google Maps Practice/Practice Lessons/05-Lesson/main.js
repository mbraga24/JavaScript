let map_1, map_2, map_3;

function initMap() {
  let mapOptions_1 = {
    zoom: 12,
    center: new google.maps.LatLng(40.783058, -73.971252)
  };

  let mapOptions_2 = {
    zoom: 8,
    center: new google.maps.LatLng(48.856613, 2.352222)
  }

  let mapOptions_3 = {
    zoom: 2,
    center: new google.maps.LatLng(-22.906847, -43.172897)
  }

  map_1 = new google.maps.Map(document.getElementById("map_canvas_1"), mapOptions_1)
  map_2 = new google.maps.Map(document.getElementById("map_canvas_2"), mapOptions_2)
  map_3 = new google.maps.Map(document.getElementById("map_canvas_3"), mapOptions_3)

  google.maps.event.addDomListener(window, 'load', initMap)
}
