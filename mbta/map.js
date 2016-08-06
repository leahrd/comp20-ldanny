var data = new XMLHttpRequest();
var marker = [{'id':'South Station',position:{lat:42.352,lng:-71.055},map:map,icon:image, title:"South Station"}, 
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
		{'id':'Braintree',  position: {lat:42.2078543,lng:-71.0011385}, map:map, icon:image, title: 'Braintree'}];

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
var infowindow = new google.maps.InfoWindow();
var infowindows = [];
var stationMarker = [];

function mapping() {
    var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: new google.maps.LatLng(42.352271, -71.05524200000001),
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    data.open("GET", "https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data.onreadystatechange = function() {
	if(data.readyState == 4 && data.status == 200){
	    info = data.responseText;
	    text = JSON.parse(info);
	    element = document.getElementById("map");
	    for(var i=0; i<marker.length;i++){
		marker[i] = new google.maps.Marker({
			position:marker[i].position,
			map: map,
			icon: image,
			title:marker[i].title
		    });
		marker[i].setMap(map);
		infowindows.push(marker[i].title);
		for(var j=0;j<text["TripList"]["Trips"].length; j++){
		    if(text["TripList"]["Trips"][j]["Predictions"][0]["Stop"] == marker[i].title) {
			data+=" Next Red Line train to " + text["TripList"]["Trips"][j]["Predictions"][0]["Stop"] + ", From " + text["TripList"]["Trips"][j]["Destination"] + " will come in " + text["TripList"]["Trips"][j]["Predictions"][0]["Seconds"] + " seconds";
		    }

		}
		
		infowindows[i]= new google.maps.event.addListener(marker[i],'click',function(){
			    infowindows[i] = new google.maps.InfoWindow();
			    infowindows[i].setContent(this.getTitle() + " " + data);
			    infowindows[i].open(map,this);
			});
	    }
	}

	else if(data.readyState == 4 && data.status !=200){
	    document.getElementById("map").innerHTML = "<p> Something has gone terribly wrong </p>"
	}

	else{
	    console.log("In progress...");
	}

    };
    data.send(null);

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



