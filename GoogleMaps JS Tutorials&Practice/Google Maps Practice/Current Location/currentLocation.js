let mapElement = document.getElementById("map");

function initMap() {
  let mapOptions = {
    center: {lat: 40.724220, lng: -73.911400},
    zoom: 14,
    // disableDefaultUI: true
    // draggable: false
    // mapTypeId: 'hybrid'
  }
  let map = new google.maps.Map(mapElement, mapOptions);
  let infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(event) {
      let position = {
        lat: event.coords.latitude,
        lng: event.coords.longitude
      };
      infoWindow.setPosition(position);
      infoWindow.setContent('Your location!');
      infoWindow.open(map);
    }, function() {
      handleLocationError('Geolocation service failed', map.center());  
    })
  } else {
    handleLocationError('No geolocation available', map.center());
  }
}

function handleLocationError(content, position) {
  infoWindow.setPosition(position)
  infoWindow.setContent(content)
  infoWindow.open(map)
}