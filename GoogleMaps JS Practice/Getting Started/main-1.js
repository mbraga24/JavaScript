/*
  SOURCE OF THIS EXERCISE
  Track User location - Google Map JavaScript API - API Key
  https://www.youtube.com/watch?v=xJubVipcHrM
*/
geolocation = navigator.geolocation;

geolocation.getCurrentPosition(success, failure);

// var mapDiv = document.getElementById("map");

function success(position) {
  
  var myLat = position.coords.latitude;
  var myLong = position.coords.longitude;
  
  var coords = new google.maps.LatLng(myLat, myLong);

  var mapOptions = {
    zoom: 9,
    center: coords,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions)
  var marker = new google.maps.Marker({map: map, position: coords});
}

function failure() {}