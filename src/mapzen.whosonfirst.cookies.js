var mapzen = mapzen || {};
mapzen.whosonfirst = mapzen.whosonfirst || {};

mapzen.whosonfirst.cookies = (function(){

	var self = {
			
		'init': function(){
			
		},

		'cookiejar': function(){

			var jar = {};
			var cookie = document.cookie;
			cookie = cookie.split(";");
			
			var count = cookie.length;
			
			for (var i=0; i < count; i++){
				
				var pair = cookie[i].split("=");
				var k = pair[0];
				var v = pair[1];
				
				k = k.trim();			
				jar[k] = v;
			}

			return jar;
		},
		
		'set_cookie': function(k, v){
			
			k = k.trim();
			
			var cookie = [k,v].join("=");
			document.cookie = cookie;
			
			var enc_cookie = mapzen.whosonfirst.php.htmlspecialchars(cookie);
			mapzen.whosonfirst.log.info("set cookie " + enc_cookie);				
		}
		
	};		

	return self;
		
})();
