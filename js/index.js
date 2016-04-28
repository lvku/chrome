$(function(){


	$("a.sessionTime").each(function(index, value){

		var v = $(value);
		var available = v.attr('available');
		var href = v.attr('href');

		console.log(href);

		var tokens = href.slice( href.indexOf("?") + 1 ).split("&");

		var object = {
			"year" : 2016,
			"month" : 4,
			"day" : 6,
			"hour" : 11,
			"minute" : 0,
			"second" : 0,
			"avalible" : 10,
			"id":100
		};

		tokens.forEach(function(v){
			var tmp = v.split("=");
			var key = tmp[0];
			var value = decodeURIComponent( tmp[1].replace(/\+/g,' ') );

			console.log(key);
			console.log(value);

			if( key === 'date'){
				var d = value.split("-");
				object.month = parseInt(d[0]);
				object.day = parseInt(d[1]);
				object.year = parseInt(d[2]);
			}

			if( key === 'time' ){
				var d1 = value.split(' ');
				var d2 = d1[0].split(':');
				object.hour = d1[1] === 'am' ? parseInt(d2[0]) : parseInt(d2[0]) + 12;
				object.minute = parseInt(d2[1]);

			}

			if( key === 'id' ){
				object.id = value;
			}
			/*
				3206 -- Alcatraz & Angel Island Combination Tour 

				3149 -- Early Bird Tour

				3157 -- 9:10 Tour

				3161 -- Day Tour

				3187 -- Night Tour
			*/
		});

		object.avalible = parseInt(available.split(" ")[0]);

		console.log("Ready to Post!!!");
		console.log(object);


		$.ajax({
			type: 'PUT',
  		url: 'http://127.0.0.1:3000/alcatraz/tickets',
  		// post payload:
  		data: JSON.stringify( object ),
  		contentType: 'application/json'
		});


	});

});