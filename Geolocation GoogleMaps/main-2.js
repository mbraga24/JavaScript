// let mapElement = document.getElementById("map");

function initMap() {

  let mapOptions = {
    zoom: 11,
    center: {lat: -22.9068, lng: -43.1729}
  };

  let map = new google.maps.Map(document.getElementById("map"), mapOptions)

  // let marker = new google.maps.Marker({
  //   position: {lat: -22.9694, lng: -43.1868},
  //   map: map,
  //   icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  // })

  // let infoWindow = google.maps.InfoWindow({
  //   content: '<h3>Copacabana</h3>'
  // })

  // marker.addListener('click', function() {
  //   infoWindow.open(map, marker);
  // });

  // Create Markers
  addMarkers({
    coords: {lat: -22.9694, lng: -43.1868},
    imageIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    content: '<h3>Copacabana</h3>'
  });
  addMarkers({
    coords: {lat: -22.9847, lng: -43.1986},
    imageIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    content: '<h3>Ipanema</h3>'
  });

  addMarkers({
    coords: {lat: -23.0004, lng: -43.3659}
  });

  // Add Markers
  function addMarkers(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    })
    
    //Check icon
    if (props.imageIcon) {
      marker.setIcon(props.imageIcon)
    }

    // Check content
    if (props.content) {
      let infoWindow = google.maps.InfoWindow({
        content: props.content
      })

      marker.addEventListener('click', function() {
        infoWindow.open(map, marker);
      });
    }

  }
}