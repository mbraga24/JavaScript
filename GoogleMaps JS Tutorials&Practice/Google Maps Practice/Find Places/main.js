let map; 
let mapElement = document.getElementById("map");

function initMap() {
  let location = new Object();
  navigator.geolocation.getCurrentPosition(function(pos){
    location.lat = pos.coords.latitude;
    location.long = pos.coords.longitude;
    map = new google.maps.Map(mapElement, {
      center: { lat: location.lat, lng: location.long },
      zoom: 15
    });

    getRestaurants(location);
  });
}

function getRestaurants(location) {
  let pyrmont = new google.maps.LatLng(location.lat, location.long);
  let request = {
    location: pyrmont,
    radius: '1500',
    type: ['restaurant']
  };

  let service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log(results)
    for (let i = 0; i < results.length; i++) {
      let place = results[i];
      let price = createPrice(place.price_level);
      let content = `<h3>${place.name}</h3>
      <h4>${place.vicinity}</h4>
      <p>Price: ${price}<br/>
      Rating: ${place.rating}`;

    let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name
    });

    let infowindow = new google.maps.InfoWindow({
      content: content
    });
    
    bindInfoWindow(marker, map, infowindow, content);
    marker.setMap(map);

    }
  }
}

function bindInfoWindow(marker, map, infowindow, html) {
  marker.addListener('click', function() {
    infowindow.setContent(html);
    infowindow.open(map, this);
  });
}

function createPrice(level) {
  if (level != "" && level != null) {
    let out = "";
    for(let i = 0; i < level; i++) {
      out += "$";
    }
    return out;
  } else {
    return "?";
  } 
}