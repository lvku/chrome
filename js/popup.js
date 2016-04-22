
$(function() {
  var btn = $("#startBtn");
  var stopBtn = $("#stopBtn");
  var status = $("#status");

  var date = new Date();
  var q = date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
  var text = "Start @ " + q;
  btn.text(text);

  // each times incread 5 days
  var times = 10; 
  var urls = [];

  //SearchEventDaySpan.aspx?date=06-23-2016
  var baseUrl = "https://www.alcatrazcruises.com/SearchEventDaySpan.aspx?date=";
  var queryDate = new Date();
  for(var i = 0; i < times; i++ ){
    queryDate = (i === 0) ? queryDate : new Date(queryDate.getTime() + 5*24*60*60*1000);
    var url = baseUrl + (queryDate.getMonth() + 1) + "-" + queryDate.getDate() + "-" + queryDate.getFullYear();
    urls.push(url);
  }


  var intervalHandle = null;

  btn.on('click',function(){

  	var tick = 10;
  	var index = 0;
    var url = '';

  	intervalHandle = setInterval(function(){
		if( tick === 0 ){
  			chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      			chrome.tabs.update(tab.id, {url: url});
			});
			index++;
			tick = 10;
  		}else{
  			if( index >= urls.length ){
  				clearInterval(intervalHandle);
  				status.html("FINISHED!!!");
  				return;
  			}
  			tick--;
  			url = urls[index];
  			status.html(tick +" second(s) to load " + url);
  		}
  	},1000);
  });

  stopBtn.on('click',function(){
    intervalHandle && clearInterval(intervalHandle);
    //if(intervalHandle){
    //  clearInterval(intervalHandle)
    //}
  });

});


