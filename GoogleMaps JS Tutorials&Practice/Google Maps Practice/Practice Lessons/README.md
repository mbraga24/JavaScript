#Constructor#

The Map() constructor creates a new map inside a specified HTML element (typically a <div> element).


Syntax:
new google.maps.Map(HTMLElement, MapOptions)  


#Parameter Values:#

HTMLElement	: Specifies in what HTML element to put the map

MapOptions	:	A MapOptions object that holds the map initialization variables/options



#Methods#


getBounds()	:	Returns the south-west latitude/longitude and the north-east latitude/longitude of the current viewport

getCenter()	:	Returns the lat/lng of the center of the map

getZoom()	:	Returns the current zoom level of the map

panTo(LatLng)	:	Changes the center of the map to the given LatLng. If the change is less than both the width and height of the map, the transition will be smoothly animated.

setCenter(LatLng)	:	Sets the center of the map to the given LatLng.

setOptions(MapOptions)	:	Sets the variables/options for the map by the MapOptions object.

setZoom(number)	:	Sets the map's zoom level.


#Properties#


controls	:	Additional controls to attach to the map

mapTypes	:	A registry of MapType instances by string ID


#Events#


bounds_changed	:	Fired when the viewport bounds have changed

center_changed	:	Fired when the map center property changes

click	:	Fired when the user clicks on the map

tilesloaded	:	Fired when the visible tiles have finished loading

zoom_changed	:	Fired when the map zoom property changes

