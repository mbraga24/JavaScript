var map;
var mapStyle1 =[];
var mapStyle2 =[
  {
    "stylers": [
      { "saturation": -50 }
    ]
  }
];

function initMap() {
  var mapOptions = {
	zoom: 12,
	center: {lat: 40.758904, lng:-73.985128},
	styles: mapStyle2
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions );
};

function removeStyle(){
	map.setOptions({styles: mapStyle1});
};

function setStyle(){
	map.setOptions({styles: mapStyle2});
};