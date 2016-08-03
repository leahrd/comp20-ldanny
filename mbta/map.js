var data = new XMLHttpRequest();
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
var stationMarker = []

function mapping() {

    var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: new google.maps.LatLng(42.352271, -71.05524200000001),
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    

	 var marker = new google.maps.Marker({
		 position: {lat:42.352, lng: -71.055},
		 map: map,
		 icon: image,
		 title: "South Station"
	     });		 

    //Trying to get schedule to show up in infowindow.  Returns undefined here but console.log in checkSchedule outputs correct info.  This is where I think my problem is.   
    marker.setMap(map);

    console.log("Checking checkschedule output" + checkSchedule(marker));
    //var result=checkSchedule(marker);
    //console.log("Here's the result!" + result);

    google.maps.event.addListener(marker,'click',function(){
	    //var result=checkSchedule(marker);
	    //console.log("Here's the result!" + result);
	    infowindow.setContent(marker.title + " " + result);
	    infowindow.open(map,marker);

	});




	 //Porter Square
	 var marker2 = new google.maps.Marker({
		 position: {lat:42.3884,lng:-71.11914899999999},
		 map: map,
		 icon:image,
		 title: "Porter Square"
	     });
    stationMarker.push(marker2.title);

	 //Andrew
	 var marker3 = new google.maps.Marker({
		 position: {lat:42.330154,lng:-71.057655},
		 map: map,
		 icon:image,
		 title: "Andrew"
	     });
    stationMarker.push(marker3.title);
	 //Harvard Square 
	  var marker4 = new google.maps.Marker({
		 position: {lat:42.373362,lng:-71.118956},
		 map: map,
		 icon:image,
		 title: "Harvard Square"
	     });
    stationMarker.push(marker4.title);
	  //JFK/UMass
	   var marker5 = new google.maps.Marker({
		 position: {lat:42.320685,lng:-71.052391},
		 map: map,
		 icon:image,
		 title: "JFK/UMass"
	     });
    stationMarker.push(marker5.title);
	   //Savin Hill
	   var marker6 = new google.maps.Marker({
		 position: {lat:42.31129,lng:-71.053331},
		 map: map,
		 icon:image,
		 title: "Savin Hill"
	     });
    stationMarker.push(marker6.title);
	   //Park Street 
	   var marker7 = new google.maps.Marker({
		 position: {lat:42.35639457,lng:-71.0624242},
		 map: map,
		 icon:image,
		 title: "Park Street"
	     });
    stationMarker.push(marker7.title);
	   //Broadway
	   var marker8 = new google.maps.Marker({
		 position: {lat:42.342622,lng:-71.056967},
		 map: map,
		 icon:image,
		 title: "Broadway"
	     });
    stationMarker.push(marker8.title);
	   //North Quincy
	   var marker9 = new google.maps.Marker({
		 position: {lat:42.275275,lng:-71.029583},
		 map: map,
		 icon:image,
		 title: "North Quincy"
	     });
    stationMarker.push(marker9.title);
	   //Shawmut 
	   var marker10 = new google.maps.Marker({
		 position: {lat:42.29312583,lng:-71.06573796000001},
		 map: map,
		 icon:image,
		 title: "Shawmut"
	     });
    stationMarker.push(marker10.title);
	   //Davis
	   var marker11 = new google.maps.Marker({
		 position: {lat:42.39674,lng:-71.121815},
		 map: map,
		 icon:image,
		 title: "Davis"
	     });
    stationMarker.push(marker11.title);
	   //Alewife
	   var marker12 = new google.maps.Marker({
		 position: {lat:42.395428,lng:-71.142483},
		 map: map,
		 icon:image,
		 title: "Alewife"
	     });
    stationMarker.push(marker12.title);
	   //Kendall/MIT 
	   var marker13 = new google.maps.Marker({
		   position: {lat:42.36249079,lng:-71.08617653},
		 map: map,
		   icon:image,
		   title: "Kendall/MIT"
	     });
    stationMarker.push(marker13.title);
	   //Charles/MGH 
	   var marker14 = new google.maps.Marker({
		 position: {lat:42.361166,lng:-71.070628},
		 map: map,
		 icon:image,
		 title: "Charles/MGH"
	     });
    stationMarker.push(marker14.title);
	   //Downtown Crossing
	   var marker15 = new google.maps.Marker({
		 position: {lat:42.355518,lng:-71.060225},
		 map: map,
		 icon:image,
		 title: "Downtown Crossing"
	     });	
    stationMarker.push(marker15.title);
	   //Quincy Center
	   var marker16 = new google.maps.Marker({
		 position: {lat:42.251809,lng:-71.005409},
		 map: map,
		 icon:image,
		 title: "Quincy Center"
	     });
    stationMarker.push(marker16.title);
	   //Quincy Adams
	   var marker17 = new google.maps.Marker({
		 position: {lat:42.233391,lng: -71.007153},
		 map: map,
		 icon:image,
		 title: "Quincy Adams"
	     });
    stationMarker.push(marker17.title);
	   //Ashmont  
	   var marker18 = new google.maps.Marker({
		 position: {lat:42.284652,lng:-71.06448899999999},
		 map: map,
		 icon:image,
		 title: "Ashmont"
	     });
    stationMarker.push(marker18.title);
	   //Wollaston 
	   var marker19 = new google.maps.Marker({
		 position: {lat:42.2665139 ,lng:-71.0203369},
		 map: map,
		 icon:image,
		 title: "Wollaston"
	     });
    stationMarker.push(marker19.title);
	   //Fields Corner 
	   var marker20 = new google.maps.Marker({
		 position: {lat:42.300093,lng:-71.061667},
		 map: map,
		 icon:image,
		 title: "Fields Corner"
	     });
    stationMarker.push(marker20.title);
	   //Central Square
	   var marker21 = new google.maps.Marker({
		 position: {lat:42.365486,lng:-71.103802},
		 map: map,
		 icon:image,
		 title: "Central Square"
	     });
    stationMarker.push(marker21.title);
	   //Braintree
	   var marker22 = new google.maps.Marker({
		 position: {lat:42.2078543,lng:-71.0011385},
		 map: map,
		 icon:image,
		 title: "Braintree"
	     });
    stationMarker.push(marker22.title);


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


	   var myLat = 0;
	   var myLng = 0;
    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		console.log("checking if have geolocation" + myLat + " " + myLng);
		var latlng = new google.maps.LatLng(myLat,myLng);
		find_closest_marker(myLat, myLng);
		    var results = find_closest_marker(myLat,myLng);
		   
		    console.log(results);
		var mark = new google.maps.Marker({
			position: latlng,
			map: map,
			title: "My Position"
		    });
		
		    mark.setMap(map);


		var contentString = "MyPosition", results;
		console.log("ContentString", results);

		console.log("Closest Latitude Longitude", closestLat, closestLng);
		    google.maps.event.addListener(mark, 'click', function(){
			    infowindow.setContent(mark.title +" "+ results);
			infowindow.open(map, mark);
		    });

		    var drawingLineCoords = [{lat:myLat,lng:myLng},
					     {lat:closestLat,lng:closestLng}];

		    var drawingLine = new google.maps.Polyline({
			    path: drawingLineCoords,
			    geodesic: true,
			    strokeColor:'#FF0000',
			    strokeOpacity: 1.0,
			    strokeWeight: 4});
		    drawingLine.setMap(map);

		    });
    
    }
    else {
	alert("Geolocation not supported on web browser");
    }    

    }



function find_closest_marker(lat, lng) {
    
    var closest = 0;
    var minimumdist = 99999;
    console.log("Closest marker",lat,lng);
    for(var i = 0; i<stationDistance.length; i++) {
	var dist = haversineDist(stationDistance[i].lat, stationDistance[i].lng, lat, lng); 
	console.log(dist);
	if (dist < minimumdist){
	    closest = i;
	    minimumdist = dist;
	}

    }
    closestLat = stationDistance[closest].lat;
    closestLng = stationDistance[closest].lng;

    console.log("Closest lat lng",stationDistance[closest].id, stationDistance[closest].lat, stationDistance[closest].lng);
    console.log("Returning", stationDistance[closest].id,minimumdist);
    return stationDistance[closest].id + " " + minimumdist;
				   
Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}





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

function checkSchedule(marker) {

    console.log("I've entered the helper function");
    
    data.open("GET","https://powerful-depths-66091.herokuapp.com/redline.json", true);
    data.onreadystatechange = function() {
	console.log("I'm about to enter the first if statement");
	if (data.readyState ==4 && data.status == 200) {

	    console.log("Got data");
	    var info = data.responseText;
	    //console.long(info);
	    //data = "";
	    var text = JSON.parse(info);
	    console.log(text);
	    element = document.getElementById("map");
	    console.log("I'm about to enter for loop");
	    //google.maps.event.addListener(stationMarker[i],'click',function() {
	    for (i = 0; i<text["TripList"]["Trips"].length; i++) {
		    if(text["TripList"]["Trips"][i]["Predictions"][0]["Stop"]  ==marker.title) {
			data+="Next Red Line train to " + text["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", " + text["TripList"]["Trips"][i]["Destination"] + " will come in " + text["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds";}

		}
	    console.log("Returning data in checkschedule" + data);
	    //return "Returning data in checkschedule" + data;
	    return data;
	    
	    //   google.maps.event.addListner(

	    //document.getElementById("map").innerHTML = info[0].Predictions;
	    //console.log(text.Predictions[Stop]);
       
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



