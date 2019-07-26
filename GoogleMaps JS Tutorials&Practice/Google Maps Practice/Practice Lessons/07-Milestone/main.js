let map1, map2;
let show_map_1 = document.querySelector(".show_map_1");
let show_map_2= document.querySelector(".show_map_2");

function initMap() {
  let mapOptions_1 = {
    zoom: 12,
    center: {lat: 41.902782, lng: 12.496365},
    draggable: false,
    keyboardShortcuts: false
  };

  let mapOptions_2 = {
    zoom: 12,
    center: {lat:48.856613 , lng: 2.352222},
    draggable: false,
    keyboardShortcuts: false
  };

  map1 = new google.maps.Map(document.getElementById("map1"), mapOptions_1)
  map2 = new google.maps.Map(document.getElementById("map2"), mapOptions_2)

  google.maps.event.addDomListener(window, 'load', initMap)
}

function loadTheMap() {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = ""
  document.body.appendChild(script);
}

function box1() {
  let showBox = document.querySelector("div.map-box1");
  showBox.classList.toggle("active");
}

function box2() {
  let showBox = document.querySelector("div.map-box2");
  showBox.classList.toggle("active");
}

show_map_1.addEventListener("click", box1)
show_map_2.addEventListener("click", box2)