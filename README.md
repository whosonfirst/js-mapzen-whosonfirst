# js-mapzen-whosonfirst

JavaScript libraries for working with Who's On First data.

## Important

This is a work in progress.

## Usage

### Example

```
var map = L.map('map');
map.fitBounds([[37.165972,-94.387972], [ 37.173238, -94.383286 ]]);

var layer = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png');
layer.addTo(map);

var _whereami = function(geojson){

    var features = geojson['features'];
    var count = features.length;

    for (var i=0; i < count; i++){
		      
       var feature = features[i];
       var props = feature['properties'];
       var id = props['wof:id'];
			      
       mapzen.whosonfirst.enmapify.render_id(map, id);
    }
};

var _click = function(e){

   var lat = 37.775789;
   var lon = -122.413593;
   var placetype = 'neighbourhood;;
      
   mapzen.whosonfirst.whereami.by_latlon(lat, lon, placetype, _whereami);
};

document.getElementById("where").onclick = function(e){ _click(e); };
```

## mapzen.whosonfirst.data

### Dependencies

None

## mapzen.whosonfirst.enmapify

### Dependencies

* [mapzen.whosonfirst.data](#mapzenwhosonfirstdata)
* [mapzen.whosonfirst.leaflet](#mapzenwhosonfirstleaflet)
* [mapzen.whosonfirst.net](##mapzenwhosonfirstnet)

## mapzen.whosonfirst.geojson

### Dependencies

None

## mapzen.whosonfirst.leaflet

### Dependencies

* [mapzen.whosonfirst.geojson](#mapzenwhosonfirstgeojson)

## mapzen.whosonfirst.net

### Dependencies

None

## mapzen.whosonfirst.whereami

### Dependencies

* [mapzen.whosonfirst.net](##mapzenwhosonfirstnet)

## See also


