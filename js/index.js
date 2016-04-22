$(function(){


	$("a.sessionTime").each(function(index, value){

		var v = $(value);
		var available = v.attr('available');
		var href = v.attr('href');

		console.log(href);

		var tokens = href.slice( href.indexOf("?") + 1 ).split("&");

		tokens.forEach(function(v){
			var tmp = v.split("=");
			var key = tmp[0];
			var value = decodeURIComponent( tmp[1].replace(/\+/g,' ') );

			console.log(key);
			console.log(value);
			/*
				3206 -- Alcatraz & Angel Island Combination Tour 

				3149 -- Early Bird Tour

				3157 -- 9:10 Tour

				3161 -- Day Tour

				3187 -- Night Tour
			*/
		});

	});


	//$.get('https://wwww.baidu.com', function(response){
  	//	$(document.body).append(response)
	//});

});