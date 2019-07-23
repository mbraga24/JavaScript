// SOURCE OF THIS EXERCISE
// https://www.youtube.com/watch?v=Zxf1mnP5zcw

function initMap() {

  const mapOptions = {
    zoom: 11,
    center: {lat: -22.9068, lng: -43.1729}
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Listen to click on map
  google.maps.event.addEventListener(map, 'click', 
    function(event) {
      // Add marker
      addMarker({coords: event.latLng})
  })

  const arrayMarkers = [
    {
      coords: {lat: -22.9694, lng: -43.1868},
      imageIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h3>Copacabana</h3>'
    },
    {
      coords: {lat: -22.9847, lng: -43.1986},
      imageIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h3>Ipanema</h3>'
    },
    {
      coords: {lat: -23.0004, lng: -43.3659},
      // imageIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h3>Barra da Tijuca</h3>'
    }
  ]

  // Loop through markers
  arrayMarkers.forEach((marker) => {
    // Create Markers
    addMarkers(marker)
  })
  
  // Add Markers
  function addMarkers(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    })

    //Check icon
    if (props.imageIcon) {
      marker.setIcon(props.imageIcon)
    }

    // Check content
    if (props.content) {
      const infoWindow = google.maps.InfoWindow({
        content: props.content
      })

      marker.addEventListener('click', function() {
        infoWindow.open(map, marker);
      });
    }

  }
}