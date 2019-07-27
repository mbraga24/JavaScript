let map;
function initMap() {
  let mapOptions = {
    zoom: 12,
    center: {lat: 41.902782, lng: 12.496365},
    mapTypeId: "satellite"
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions );
};
function setType(choice) {
	switch(choice){
    
		case 1:
			map.setMapTypeId("satellite");
      break;
      
		case 2:
			map.setMapTypeId("hybrid");
      break;
      
		case 3:
			map.setMapTypeId("terrain");
      break;
      
		default:
			map.setMapTypeId("roadmap");
			break;
	}
};

google.maps.event.addDomListener(window, 'load', initMap);