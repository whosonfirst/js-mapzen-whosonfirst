var mapzen = mapzen || {};
mapzen.whosonfirst = mapzen.whosonfirst || {};

mapzen.whosonfirst.whereami = (function(){

	var _endpoint = 'https://whereami.whosonfirst.mapzen.com/';

	var self = {

		'endpoint': function(e){

			if (e){
				_endpoint = e;
			}

			return _endpoint;
		},

		'by_latlon': function(lat, lon, placetype, callback){

			var params = {
				'latitude': lat,
				'longitude': lon
			};
			
			if (placetype){
				params['placetype'] = placetype;
			}

			return self._whereami(params, callback);
		},
	       
		'_whereami': function(params, callback){
			
			if (! callback){
				callback = function(rsp){
					console.log(rsp);
				};
			}

			var query = mapzen.whosonfirst.net.encode_query(params);
			var url = self.endpoint() + "?" + query;

			mapzen.whosonfirst.net.fetch(url, callback);
		}
	};

	return self;

})();