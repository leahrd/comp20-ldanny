var data = new XMLHttpRequest();

var marker = [];
var station = [];
var image = './here.png';
var req = new XMLHttpRequest();
var map;
var stationDistance = [{'id':'South Station', lat:42.352,lng:-71.055},
		       {'id':'Porter Square', lat:42.3884,lng:-71.11914899999999},
		       {'id':'Andrew', lat:42.330154,lng:-71.057655},
		       {'id':'Harvard Square', lat:42.373362,lng:-71.118956},
		       {'id':'JFK/UMass', lat:42.320685,lng:-71.052391},
		       {'id':'Savin Hill', lat:42.31129,lng:-71.053331},
		       {'id':'Park Street', lat:42.35639457,lng:-71.0624242},
		       {'id':'Broadway', lat:42.342622,lng:-71.056967},
		       {'id':'North Quincy', lat:42.275275,lng:-71.029583},
		       {'id':'Shamut', lat:42.29312583,lng:-71.06573796000001},
		       {'id':'Davis', lat:42.39674,lng:-71.121815},
		       {'id':'Alewife', lat:42.395428,lng:-71.142483},
		       {'id':'Kendall/MIT', lat:42.36249079,lng:-71.08617653},
		       {'id':'Charles/MGH', lat:42.361166,lng:-71.070628},
		       {'id':'Downtown Crossing', lat:42.355518,lng:-71.060225},
		       {'id':'Quincy Center', lat:42.251809,lng:-71.005409},
		       {'id':'Quincy Adams', lat:42.233391,lng: -71.007153},
		       {'id':'Ashmont', lat:42.284652,lng:-71.06448899999999},
		       {'id':'Wollaston', lat:42.2665139 ,lng:-71.0203369},
		       {'id':'Fields Corner', lat:42.300093,lng:-71.061667},
		       {'id':'Central Square', lat:42.365486,lng:-71.103802},
		       {'id':'Braintree', lat:42.2078543,lng:-71.0011385}
		       ];
var myLocation = [ ];
var closestLat = 0;
var closestLng = 0;
var closestLatLng = new google.maps.LatLng(closestLat,closestLng);
var infowindows = [];
var infowindow = new google.maps.InfoWindow();

var stationMarker = [];

function mapping() {
    console.log("I'm entering mapping");
    //Displaying map
    var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: new google.maps.LatLng(42.352271, -71.05524200000001),
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	});

    console.log("I'm going to open data");

    data.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    console.log("I just opened data");
    data.onreadystatechange = function() {
	alert("entered call back function" + xmlHttp.readyState);
	console.log("I just went through onreadystatechange");
	if(data.readyState == 4 && data.status == 200){
	    var info = data.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    console.log(text);
	    for(var i=0; i<marker.length;i++){
		console.log(marker[i]);
		marker[i] = new google.maps.marker([{'id':'South Station',position:{lat:42.352,lng:-71.055},map:map,icon:image, title:"South Station"}, 
		{'id':'Porter Square',position:{lat:42.3884,lng:-71.11914899999999},map: map,icon:image,title:"Porter Square"},
		{'id': 'Andrew', position: {lat:42.330154,lng:-71.057655}, map: map, icon:image, title:'Andrew'},
		{'id':'Harvard Square',position:{lat:42.373362,lng:-71.118956}, map: map, icon:image, title:'Harvard Square'},
		{'id':'JFK/UMass',  position: {lat:42.320685,lng:-71.052391}, map: map, icon: image, title: 'JFK/UMass'},
		{'id':'Savin Hill',  position: {lat:42.31129,lng:-71.053331}, map: map, icon: image, title: 'Savin Hill'},
		{'id':'Park Street', position: {lat:42.35639457,lng:-71.0624242}, map: map, icon: image, title: 'Park Street'},
		{'id':'Broadway', position: {lat:42.342622,lng:-71.056967}, map: map, icon: image, title: 'Broadway'},
		{'id':'North Quincy', position: {lat:42.275275,lng:-71.029583}, map: map, icon: image,  title: 'North Quincy'},
		{'id':'Shamut', position: {lat:42.29312583,lng:-71.06573796000001}, map: map, icon: image, title: 'Shawmut'},
		{'id':'Davis', position: {lat:42.39674,lng:-71.121815}, map: map, icon: image, title: 'Davis'},
		{'id': 'Alewife', position: {lat:42.395428,lng:-71.142483}, map: map, icon: image, title: 'Alewife'},
		{'id':'Kendal/MIT', position: {lat:42.36249079,lng:-71.08617653}, map: map, icon: image, title: 'Kendal\/MIT'},
		{'id':'Charles/MGH', position: {lat:42.361166,lng:-71.070628}, map: map, icon:image, title: 'Charles/MGH'},
		{'id':'Downtown Crossing',position:{lat:42.355518,lng:-71.060225},map:map,icon:image,title:'Downtown Crossing'},
		{'id': 'Quincy Center',position: {lat:42.251809,lng:-71.005409}, map:map, icon: image, title: 'Quincy Center'},
		{'id':'Quincy Adams',position: {lat:42.233391,lng: -71.007153}, map: map, icon: image, title: 'Quincy Adams'},
		{'id':'Ashmont', position: {lat:42.284652,lng:-71.06448899999999}, map:map,icon:image, title:'Ashmont'},
		{'id':'Wollaston',position: {lat:42.2665139 ,lng:-71.0203369}, map:map, icon:image, title:'Wollaston'},
		{'id':'Fields Corner', position: {lat:42.300093,lng:-71.061667}, map:map, icon:image, title:'Fields Corner'},
		{'id':'Centeral Suare',position: {lat:42.365486,lng:-71.103802}, map:map, icon:image, title:'Centeral Square'},
		{'id':'Braintree',  position: {lat:42.2078543,lng:-71.0011385}, map:map, icon:image, title: 'Braintree'}]);
		
		marker[i].setMap(map);
		for(var j=0;i<["TripList"]["Trips"].length; j++){
		    if(text["TripList"]["Trips"][j]["Predictions"][0]["Stop"]==marker[i].title){
             data21+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
		}
	    }
		infowindows[i]=google.maps.event.addListener(marker[i],'click',function(){
			infowindow.setContent(this.getTitle() + " " + data);
			infowindow.open(map,this);
		    });
	    }

	else if(data.readyState == 4 && data.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong </p>"
	}
	else{
		console.log("In progress...");
	}

	    data.send(null);
    }


    //Define marker variable and create infowindow
    //South Station    
    /*  var marker = new google.maps.Marker({
	    position: {lat:42.352, lng: -71.055},
	    map: map,
	    icon: image,
	    title: "South Station"
	});		 



    marker.setMap(map);
    data.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data.onreadystatechange = function() {
	if(data.readyState == 4 && data.status ==200){
	    var info = data.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker.title) {
		    data+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    
	    google.maps.event.addListener(marker,'click',function(){
		 infowindow2.setContent(this.getTitle() + " " + data);
		 infowindow2.open(map,this);
		});
	}
	else if(data.readyState == 4 && data.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data.send(null)
	
	
	//Porter Square
	var marker2 = new google.maps.Marker({
		 position: {lat:42.3884,lng:-71.11914899999999},
		 map: map,
		 icon:image,
		 title: "Porter Square"
	     });
    
    stationMarker.push(marker2.title);
        data2.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data2.onreadystatechange = function() {
	if(data2.readyState == 4 && data2.status ==200){
	    var info = data2.responseText;
	    var text = JSON.parse(info);
      	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker2.title) {
		    data2+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker2,'click',function(){
		    infowindow3.setContent(this.getTitle() + " " + data2);
		    infowindow3.open(map,this);

		});


	}
	else if(data2.readyState == 4 && data2.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data2.send(null)


	//Andrew
	var marker3 = new google.maps.Marker({
		position: {lat:42.330154,lng:-71.057655},
		map: map,
		icon:image,
		title: "Andrew"
	    });
    stationMarker.push(marker3.title);

    data3.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data3.onreadystatechange = function() {
	if(data3.readyState == 4 && data3.status ==200){
	    var info = data3.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker3.title) {
		    data3+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker3,'click',function(){
		 infowindow4.setContent(this.getTitle() + " " + data3);
		 infowindow4.open(map,this);
		});
	}
	else if(data3.readyState == 4 && data3.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data3.send(null)




	//Harvard Square 
	var marker4 = new google.maps.Marker({
		position: {lat:42.373362,lng:-71.118956},
		map: map,
		icon:image,
		title: "Harvard Square"
	    });
    stationMarker.push(marker4.title);

    data4.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data4.onreadystatechange = function() {
	if(data4.readyState == 4 && data4.status ==200){
	    var info = data4.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker4.title) {
		    data4+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker4,'click',function(){
		 infowindow5.setContent(this.getTitle() + " " + data4);
		 infowindow5.open(map,this);
		});
	}
	else if(data4.readyState == 4 && data4.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data4.send(null)

	//JFK/UMass
	var marker5 = new google.maps.Marker({
		position: {lat:42.320685,lng:-71.052391},
		map: map,
		icon:image,
		title: "JFK/UMass"
	    });
    stationMarker.push(marker5.title);
	 
    data5.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data5.onreadystatechange = function() {
	if(data5.readyState == 4 && data5.status ==200){
	    var info = data5.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker5.title) {
		    data5+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker5,'click',function(){
		 infowindow6.setContent(this.getTitle() + " " + data5);
		 infowindow6.open(map,this);
		});
	}
	else if(data3.readyState == 4 && data3.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data5.send(null)


	//Savin Hill
	var marker6 = new google.maps.Marker({
		position: {lat:42.31129,lng:-71.053331},
		map: map,
		icon:image,
		title: "Savin Hill"
	    });
    stationMarker.push(marker6.title);
	 
    data6.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data6.onreadystatechange = function() {
	if(data6.readyState == 4 && data6.status ==200){
	    var info = data6.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker6.title) {
		    data6+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker6,'click',function(){
		 infowindow7.setContent(this.getTitle() + " " + data6);
		 infowindow7.open(map,this);
		});
	}
	else if(data6.readyState == 4 && data6.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data6.send(null)

	//Park Street 
	var marker7 = new google.maps.Marker({
		position: {lat:42.35639457,lng:-71.0624242},
		map: map,
		icon:image,
		title: "Park Street"
	    });
    stationMarker.push(marker7.title);

    data7.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data7.onreadystatechange = function() {
	if(data7.readyState == 4 && data7.status ==200){
	    var info = data7.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker7.title) {
		    data7+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker7,'click',function(){
		 infowindow8.setContent(this.getTitle() + " " + data7);
		 infowindow8.open(map,this);
		});
	}
	else if(data7.readyState == 4 && data7.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data7.send(null)

	//Broadway
	var marker8 = new google.maps.Marker({
		position: {lat:42.342622,lng:-71.056967},
		map: map,
		icon:image,
		title: "Broadway"
	    });
    stationMarker.push(marker8.title);
	 
    data8.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data8.onreadystatechange = function() {
	if(data8.readyState == 4 && data8.status ==200){
	    var info = data8.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker8.title) {
		    data8+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker8,'click',function(){
		 infowindow9.setContent(this.getTitle() + " " + data8);
		 infowindow9.open(map,this);
		});
	}
	else if(data8.readyState == 4 && data8.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data8.send(null)


	//North Quincy
	var marker9 = new google.maps.Marker({
		position: {lat:42.275275,lng:-71.029583},
		map: map,
		icon:image,
		title: "North Quincy"
	    });
    stationMarker.push(marker9.title);
	 
    data9.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data9.onreadystatechange = function() {
	if(data9.readyState == 4 && data9.status ==200){
	    var info = data9.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker9.title) {
		    data9+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker9,'click',function(){
		 infowindow10.setContent(this.getTitle() + " " + data9);
		 infowindow10.open(map,this);
		});
	}
	else if(data9.readyState == 4 && data9.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data9.send(null)


	//Shawmut 
	var marker10 = new google.maps.Marker({
		position: {lat:42.29312583,lng:-71.06573796000001},
		map: map,
		icon:image,
		title: "Shawmut"
	    });
    stationMarker.push(marker10.title);
	 
    data10.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data10.onreadystatechange = function() {
	if(data10.readyState == 4 && data10.status ==200){
	    var info = data10.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker10.title) {
		    data10+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker10,'click',function(){
		 infowindow11.setContent(this.getTitle() + " " + data10);
		 infowindow11.open(map,this);
		});
	}
	else if(data10.readyState == 4 && data10.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data10.send(null)

	//Davis
	var marker11 = new google.maps.Marker({
		position: {lat:42.39674,lng:-71.121815},
		map: map,
		icon:image,
		title: "Davis"
	    });
    stationMarker.push(marker11.title);
	  
    data11.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data11.onreadystatechange = function() {
	if(data11.readyState == 4 && data11.status ==200){
	    var info = data11.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker11.title) {
		    data11+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker11,'click',function(){
		 infowindow12.setContent(this.getTitle() + " " + data11);
		 infowindow12.open(map,this);
		});
	}
	else if(data11.readyState == 4 && data11.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data11.send(null)


	//Alewife
	var marker12 = new google.maps.Marker({
		position: {lat:42.395428,lng:-71.142483},
		map: map,
		icon:image,
		title: "Alewife"
	    });
    stationMarker.push(marker12.title);
	  
    data12.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data12.onreadystatechange = function() {
	if(data12.readyState == 4 && data12.status ==200){
	    var info = data12.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker12.title) {
		    data12+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker12,'click',function(){
		 infowindow13.setContent(this.getTitle() + " " + data12);
		 infowindow13.open(map,this);
		});
	}
	else if(data12.readyState == 4 && data12.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data12.send(null)

	//Kendall/MIT 
	var marker13 = new google.maps.Marker({
		position: {lat:42.36249079,lng:-71.08617653},
		map: map,
		icon:image,
		title: "Kendall/MIT"
	    });
    stationMarker.push(marker13.title);
	  
    data13.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data13.onreadystatechange = function() {
	if(data13.readyState == 4 && data13.status ==200){
	    var info = data13.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker13.title) {
		    data13+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker13,'click',function(){
		 infowindow14.setContent(this.getTitle() + " " + data13);
		 infowindow14.open(map,this);
		});
	}
	else if(data13.readyState == 4 && data13.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data13.send(null)

	//Charles/MGH 
	var marker14 = new google.maps.Marker({
		position: {lat:42.361166,lng:-71.070628},
		map: map,
		icon:image,
		title: "Charles/MGH"
	    });
    stationMarker.push(marker14.title);
	  
    data14.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data14.onreadystatechange = function() {
	if(data14.readyState == 4 && data14.status ==200){
	    var info = data14.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker14.title) {
		    data14+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker14,'click',function(){
		 infowindow15.setContent(this.getTitle() + " " + data14);
		 infowindow15.open(map,this);
		});
	}
	else if(data14.readyState == 4 && data14.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data14.send(null)

	//Downtown Crossing
	var marker15 = new google.maps.Marker({
		position: {lat:42.355518,lng:-71.060225},
		map: map,
		icon:image,
		title: "Downtown Crossing"
	    });	
    stationMarker.push(marker15.title);
	  
    data15.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data15.onreadystatechange = function() {
	if(data15.readyState == 4 && data15.status ==200){
	    var info = data15.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker15.title) {
		    data15+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker15,'click',function(){
		 infowindow16.setContent(this.getTitle() + " " + data15);
		 infowindow16.open(map,this);
		});
	}
	else if(data15.readyState == 4 && data15.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data15.send(null)

	//Quincy Center
	var marker16 = new google.maps.Marker({
		position: {lat:42.251809,lng:-71.005409},
		map: map,
		icon:image,
		title: "Quincy Center"
	    });
    stationMarker.push(marker16.title);
	  
    data16.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data16.onreadystatechange = function() {
	if(data16.readyState == 4 && data16.status ==200){
	    var info = data16.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker16.title) {
		    data16+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker16,'click',function(){
		 infowindow17.setContent(this.getTitle() + " " + data16);
		 infowindow17.open(map,this);
		});
	}
	else if(data16.readyState == 4 && data16.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data16.send(null)

	//Quincy Adams
	var marker17 = new google.maps.Marker({
		position: {lat:42.233391,lng: -71.007153},
		map: map,
		icon:image,
		title: "Quincy Adams"
	    });
    stationMarker.push(marker17.title);
	  

    data17.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data17.onreadystatechange = function() {
	if(data17.readyState == 4 && data17.status ==200){
	    var info = data17.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker17.title) {
		    data17+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker17,'click',function(){
		 infowindow18.setContent(this.getTitle() + " " + data17);
		 infowindow18.open(map,this);
		});
	}
	else if(data17.readyState == 4 && data17.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data17.send(null)

	//Ashmont  
        var marker18 = new google.maps.Marker({
		position: {lat:42.284652,lng:-71.06448899999999},
		map: map,
		icon:image,
		title: "Ashmont"
           });
    stationMarker.push(marker18.title);
	  
    data18.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data18.onreadystatechange = function() {
	if(data18.readyState == 4 && data18.status ==200){
	    var info = data18.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker18.title) {
		    data18+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker18,'click',function(){
		 infowindow19.setContent(this.getTitle() + " " + data18);
		 infowindow19.open(map,this);
		});
	}
	else if(data18.readyState == 4 && data18.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data18.send(null)

	//Wollaston 
	var marker19 = new google.maps.Marker({
		position: {lat:42.2665139 ,lng:-71.0203369},
		map: map,
		icon:image,
		title: "Wollaston"
	    });
    stationMarker.push(marker19.title);
	  
    data19.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data19.onreadystatechange = function() {
	if(data19.readyState == 4 && data19.status ==200){
	    var info = data19.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker19.title) {
		    data19+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker19,'click',function(){
		 infowindow20.setContent(this.getTitle() + " " + data19);
		 infowindow20.open(map,this);
		});
	}
	else if(data19.readyState == 4 && data19.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data19.send(null)

	//Fields Corner 
	var marker20 = new google.maps.Marker({
		position: {lat:42.300093,lng:-71.061667},
		map: map,
		icon:image,
		title: "Fields Corner"
	    });
    stationMarker.push(marker20.title);

    data20.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data20.onreadystatechange = function() {
	if(data20.readyState == 4 && data20.status ==200){
	    var info = data20.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker20.title) {
		    data20+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker20,'click',function(){
		 infowindow21.setContent(this.getTitle() + " " + data20);
		 infowindow21.open(map,this);
		});
	}
	else if(data20.readyState == 4 && data20.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data20.send(null)	  

	//Central Square
	var marker21 = new google.maps.Marker({
		position: {lat:42.365486,lng:-71.103802},
		map: map,
		icon:image,
		title: "Central Square"
	    });
    stationMarker.push(marker21.title);

    data21.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data21.onreadystatechange = function() {
	if(data21.readyState == 4 && data21.status ==200){
	    var info = data21.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker21.title) {
		    data21+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker21,'click',function(){
		 infowindow22.setContent(this.getTitle() + " " + data21);
		 infowindow22.open(map,this);
		});
	}
	else if(data21.readyState == 4 && data21.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data21.send(null)	  

	//Braintree
	var marker22 = new google.maps.Marker({
		position: {lat:42.2078543,lng:-71.0011385},
		map: map,
		icon:image,
		title: "Braintree"
	    });
    stationMarker.push(marker22.title);

    data22.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data22.onreadystatechange = function() {
	if(data22.readyState == 4 && data22.status ==200){
	    var info = data22.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(i=0;i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker22.title) {
		    data22+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}
	    }
	    google.maps.event.addListener(marker22,'click',function(){
		 infowindow23.setContent(this.getTitle() + " " + data22);
		 infowindow23.open(map,this);
		});
	}
	else if(data22.readyState == 4 && data22.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>"
	}
	else{
	    console.log("In progress...");
	}
    };
    data22.send(null)
    */
	//Drawing lines between stations
	
	   var mbtaPathCoordinates1 = [
				       {lat:42.395428,lng:-71.142483},
				       {lat:42.39674,lng:-71.121815},
				       {lat:42.3884,lng:-71.11914899999999},
				       {lat:42.373362,lng:-71.118956},
				       {lat:42.365486,lng:-71.103802},
				       {lat:42.36249079,lng:-71.08617653},
				       {lat:42.361166,lng:-71.070628},
				       {lat:42.35639457,lng:-71.0624242},
				       {lat:42.355518,lng:-71.060225},
				       {lat:42.352, lng: -71.055},
				       {lat:42.342622,lng:-71.056967},
				       {lat:42.330154,lng:-71.057655},
				       {lat:42.320685,lng:-71.052391},

			   ];
	   var mbtaPath1 = new google.maps.Polyline({
		   path: mbtaPathCoordinates1,
		   geodesic: true,
		   strokeColor: '#FF0000',
		   strokeOpacity:1.0,
		   strokeWeight:4
	       });
	   mbtaPath1.setMap(map);

	   var mbtaPathCoordinates2 = [
				       {lat:42.320685,lng:-71.052391},
				       {lat:42.275275,lng:-71.029583},
				       {lat:42.2665139 ,lng:-71.0203369},
				       {lat:42.251809,lng:-71.005409},
				       {lat:42.233391,lng: -71.007153},
				       {lat:42.2078543,lng:-71.0011385}
				       ];
	   var mbtaPath2 = new google.maps.Polyline({
		   path: mbtaPathCoordinates2,
		   geodesic:true,
		   strokeColor: '#FF0000',
		   strokeOpacity:1.0,
		   strokeWeight:4
	       });
	   mbtaPath2.setMap(map);

	   var mbtaPathCoordinates3 = [
				       {lat:42.320685,lng:-71.052391},
				       {lat:42.31129,lng:-71.053331},
				       {lat:42.300093,lng:-71.061667},
				       {lat:42.29312583,lng:-71.06573796000001},
				       {lat:42.284652,lng:-71.06448899999999}
				       ];
	   var mbtaPath3 = new google.maps.Polyline({
		   path: mbtaPathCoordinates3,
		   geodesic:true,
		   strokeColor: '#FF0000',
		   strokeOpacity:1.0,
		   strokeWeight:4
	       });
	   mbtaPath3.setMap(map);

    //Finding my location, placing a marker, drawing a location to closest station, and calculate distance
    var myLat = 0;
    var myLng = 0;
    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		var latlng = new google.maps.LatLng(myLat,myLng);
		find_closest_marker(myLat, myLng);
		var results = find_closest_marker(myLat,myLng);
		var mark = new google.maps.Marker({
			position: latlng,
			map: map,
			title: "My Position"
		    });
	    
		mark.setMap(map);

		var contentString = "MyPosition", results;
		google.maps.event.addListener(mark, 'click', function(){
			infowindow.setContent(mark.title +" "+ results);
			infowindow.open(map, mark);
		    });
		var drawingLineCoords = [{lat:myLat,lng:myLng},
					 {lat:closestLat,lng:closestLng}];

		var drawingLine = new google.maps.Polyline({
			path: drawingLineCoords,
			geodesic: true,
			strokeColor:'purple',
			strokeOpacity: 1.0,
			strokeWeight: 4});
		drawingLine.setMap(map);

	    });
    
    }
    else {
	alert("Geolocation not supported on web browser");
    }    

    }


//This function finds the closest marker to my location
function find_closest_marker(lat, lng) {
    
    var closest = 0;
    var minimumdist = 99999;
    for(var i = 0; i<stationDistance.length; i++) {
	var dist = haversineDist(stationDistance[i].lat, stationDistance[i].lng, lat, lng); 
	if (dist < minimumdist){
	    closest = i;
	    minimumdist = dist;
	}

    }
    closestLat = stationDistance[closest].lat;
    closestLng = stationDistance[closest].lng;
    return stationDistance[closest].id + " " + minimumdist;
				   
Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}




//This function calculates haversine distance
function haversineDist(lat1, lon1, lat2, lon2) {
    function toRad(x){
	return x * Math.PI/180;
    }


    var R = 6371;
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
	Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;
}


}
//This is my failed function.  It was supposed to help me check the upcoming schedule and populate infowindow for each station.
function checkSchedule(marker) {

    data.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data.onreadystatechange = function() {
	if (data.readyState ==4 && data.status == 200) {
	    var info = data.responseText;
	    var text = JSON.parse(info);
	    element = document.getElementById("map");
	    for (var i = 0; i<text["TripList"]["Trips"].length; i++) {
		if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker.title) {
		    data+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";
		}
	    }
	    google.maps.event.addListener(marker,'click',function(){
		 infowindow.setContent(this.getTitle() + " " + data);
		 infowindow.open(map,marker);

		});
	return data;
	    
	}
	else if(data.readyState == 4 && data.status !=200) {
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong</p>";
	}
	else{
	    console.log("In progress...");
	}
    };
    data.send(null);
}



google.maps.event.addDomListener(window, 'load', mapping);



