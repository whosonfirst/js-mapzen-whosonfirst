# js-mapzen-whosonfirst

JavaScript libraries for working with Who's On First data.

## Caveats

* This is a work in progress.
* It is not fully documented.
* There is an [open ticket](https://github.com/whosonfirst/js-mapzen-whosonfirst/issues/1) to generate minified and bundled versions of each library listed below. As of this writing you still need to include all the dependencies manually.

## mapzen.whosonfirst.brands

### Example

_Please write me._

### Dependencies

* [mapzen.whosonfirst.log](#mapzenwhosonfirstlog)

## mapzen.whosonfirst.data

_This has been deprecated. Please use [mapzen.whosonfirst.uri](#mapzenwhosonfirsturi) instead._

## mapzen.whosonfirst.enmapify

### Example

_Please write me._

### Dependencies

* [mapzen.whosonfirst.data](#mapzenwhosonfirstdata)
* [mapzen.whosonfirst.leaflet](#mapzenwhosonfirstleaflet)
* [mapzen.whosonfirst.leaflet.handlers](#mapzenwhosonfirstleaflethandlers)
* [mapzen.whosonfirst.leaflet.styles](#mapzenwhosonfirstleafletstyles)
* [mapzen.whosonfirst.net](#mapzenwhosonfirstnet)

## mapzen.whosonfirst.footnotes

Generate an ordered list of footnotes from links that are children of a source (DOM) element, optionally filtering on a specific class attribute. Matching links are appended with a sibling `sup` element containing their footnote index. The footnotes list itself is appended to a target (DOM) element.

### Example

```
var source_el = document.getElementById("content");
var target_el =	document.getElementById("content");

mapzen.whosonfirst.footnotes.add_footnotes(source_el, target_el, {'class': 'wof-footnote'});
```

### Dependencies

_None_

## mapzen.whosonfirst.geojson

### Example

_Please write me._

### Dependencies

_None_

## mapzen.whosonfirst.leaflet

### Example

_Please write me._

### Dependencies

* [leaflet](http://leafletjs.com/)
* [mapzen.whosonfirst.geojson](#mapzenwhosonfirstgeojson)

## mapzen.whosonfirst.leaflet.handlers

### Example

_Please write me._

### Dependencies

* [leaflet](http://leafletjs.com/)

## mapzen.whosonfirst.leaflet.styles

### Example

_Please write me._

### Dependencies

* [leaflet](http://leafletjs.com/)

## mapzen.whosonfirst.leaflet.tangram

### Example

_Please write me._

### Dependencies

* [leaflet](http://leafletjs.com/)
* [tangram](https://mapzen.com/projects/tangram/)

## mapzen.whosonfirst.log

### Example

_Please write me._

### Dependencies

* [mapzen.whosonfirst.php](#mapzenwhosonfirstphp)

## mapzen.whosonfirst.namify

Find all the elements in the current DOM with a `wof-namify` class and replace their value with the corresponding name for the Who's On First record as identified by a `wof-data-id` attribute. Results are cached client-side using the [localForage](https://github.com/mozilla/localForage) library.

### Example

```
mapzen.whosonfirst.namify.namify_wof();
```

### Dependencies

* [mapzen.whosonfirst.brands](#mapzenwhosonfirstbrands)
* [mapzen.whosonfirst.log](#mapzenwhosonfirstlog)
* [mapzen.whosonfirst.net](#mapzenwhosonfirstnet)
* [mapzen.whosonfirst.php](#mapzenwhosonfirstphp)
* [mapzen.whosonfirst.uri](#mapzenwhosonfirsturi)
* [localforage](https://github.com/mozilla/localForage)

## mapzen.whosonfirst.net

### Example

_Please write me._

### Dependencies

_None_

## mapzen.whosonfirst.php

### Example

_Please write me._

### Dependencies

_None_

## mapzen.whosonfirst.placetypes

### Example

_Please write me._

### Dependencies

_None_

## mapzen.whosonfirst.uri

Helper methods for generating absolute and relative URIs for Who's On First documents.

### Example

```
var endpoint = mapzen.whosonfirst.uri.endpoint();
var url = mapzen.whosonfirst.uri.id2abspath(endpoint, 102112179);

var rel_path = mapzen.whosonfirst.uri.id2relpath(102112179);
```

### Dependencies

* [mapzen.whosonfirst.log](#mapzenwhosonfirstlog)
* [mapzen.whosonfirst.net](##mapzenwhosonfirstnet)

## mapzen.whosonfirst.whereami

### Example

_Please write me._

### Dependencies

* [mapzen.whosonfirst.net](##mapzenwhosonfirstnet)

## See also


