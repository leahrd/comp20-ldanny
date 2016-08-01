
var image = './here.png';
var req = new XMLHttpRequest();
var map;
var stationDistance = [{'id':'South Station', lat:42.352,lng:-71.055}];
var myLocation = [ ];
var closestLat = 0;
var closestLng = 0;
var closestLatLng = new google.maps.LatLng(closestLat,closestLng);
var infowindow = new google.maps.InfoWindow();
/*
function init(){
    map = new google.maps.Map(document.getElementById('map'),options);
			      // mapping();
    //getMyLocation();
    }
*/		      
function mapping() {
    var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: new google.maps.LatLng(42.352271, -71.05524200000001),
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    
	 //South Station
	 var marker = new google.maps.Marker({
		 position: {lat:42.352, lng: -71.055},
		 map: map,
		 icon: image
		 });

	 //Porter Square
	 var marker2 = new google.maps.Marker({
		 position: {lat:42.3884,lng:-71.11914899999999},
		 map: map,
		 icon:image
	     });
	 //Andrew
	 var marker3 = new google.maps.Marker({
		 position: {lat:42.330154,lng:-71.057655},
		 map: map,
		 icon:image
	     });
	 //Harvard Square 
	  var marker4 = new google.maps.Marker({
		 position: {lat:42.373362,lng:-71.118956},
		 map: map,
		 icon:image
	     });
	  //JFK/UMass
	   var marker5 = new google.maps.Marker({
		 position: {lat:42.320685,lng:-71.052391},
		 map: map,
		 icon:image
	     });
	   //Savin Hill
	   var marker6 = new google.maps.Marker({
		 position: {lat:42.31129,lng:-71.053331},
		 map: map,
		 icon:image
	     });
	   //Park Street 
	   var marker7 = new google.maps.Marker({
		 position: {lat:42.35639457,lng:-71.0624242},
		 map: map,
		 icon:image
	     });
	   //Broadway
	   var marker8 = new google.maps.Marker({
		 position: {lat:42.342622,lng:-71.056967},
		 map: map,
		 icon:image
	     });
	   //North Quincy
	   var marker9 = new google.maps.Marker({
		 position: {lat:42.275275,lng:-71.029583},
		 map: map,
		 icon:image
	     });
	   //Shawmut 
	   var marker10 = new google.maps.Marker({
		 position: {lat:42.29312583,lng:-71.06573796000001},
		 map: map,
		 icon:image
	     });
	   //Davis
	   var marker11 = new google.maps.Marker({
		 position: {lat:42.39674,lng:-71.121815},
		 map: map,
		 icon:image
	     });
	   //Alewife
	   var marker12 = new google.maps.Marker({
		 position: {lat:42.395428,lng:-71.142483},
		 map: map,
		 icon:image
	     });
	   //Kendall/MIT 
	   var marker13 = new google.maps.Marker({
		   position: {lat:42.36249079,lng:-71.08617653},
		 map: map,
		 icon:image
	     });
	   //Charles/MGH 
	   var marker14 = new google.maps.Marker({
		 position: {lat:42.361166,lng:-71.070628},
		 map: map,
		 icon:image
	     });
	   //Downtown Crossing
	   var marker15 = new google.maps.Marker({
		 position: {lat:42.355518,lng:-71.060225},
		 map: map,
		 icon:image
	     });	
	   //Quincy Center
	   var marker16 = new google.maps.Marker({
		 position: {lat:42.251809,lng:-71.005409},
		 map: map,
		 icon:image
	     });
	   //Quincy Adams
	   var marker17 = new google.maps.Marker({
		 position: {lat:42.233391,lng: -71.007153},
		 map: map,
		 icon:image
	     });
	   //Ashmont  
	   var marker18 = new google.maps.Marker({
		 position: {lat:42.284652,lng:-71.06448899999999},
		 map: map,
		 icon:image
	     });
	   //Wollaston 
	   var marker19 = new google.maps.Marker({
		 position: {lat:42.2665139 ,lng:-71.0203369},
		 map: map,
		 icon:image
	     });
	   //Fields Corner 
	   var marker20 = new google.maps.Marker({
		 position: {lat:42.300093,lng:-71.061667},
		 map: map,
		 icon:image
	     });
	   //Central Square
	   var marker21 = new google.maps.Marker({
		 position: {lat:42.365486,lng:-71.103802},
		 map: map,
		 icon:image
	     });
	   //Braintree
	   var marker22 = new google.maps.Marker({
		 position: {lat:42.2078543,lng:-71.0011385},
		 map: map,
		 icon:image
	     });

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

//console.log("Going to call getmylocation");
//getMyLocation();
//console.log("Called getmylocation");
	   
	   //console.log("Going to call getmylocation");
	   //getMyLocation();
	   //console.log("Called getmylocation");
	   var myLat = 0;
	   var myLng = 0;
    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		//var myLoc = new google.maps.LatLng(myLat, myLng);
		console.log("checking if have geolocation" + myLat + " " + myLng);
      		//myLocation.push({'id':'My Location','lat':myLat,'lng':myLng});
		//console.log(myLocation);
		var latlng = new google.maps.LatLng(myLat,myLng);
		find_closest_marker(myLat, myLng);
		    //console.log("results",find_closest_marker(myLat,myLng));
		    var results = find_closest_marker(myLat,myLng);
		   
		    console.log(results);
		    //var infowindow = new google.maps.InfoWindow({
		    //    content:results});

		var mark = new google.maps.Marker({
			position: latlng,
			map: map,
			title: "My Position"
			//icon: image
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
	        //alert(myLat +" " + myLng);
		//makeMap(); 
		    });
    
    }
    else {
	alert("Geolocation not supported on web browser");
    }    

    //    var myloc = new google.maps.LatLng(myLat, myLng);
	    /*
    console.log(myLat + " " + myLng);
    var mark = new google.maps.Marker({
	    position: {lat:myLat, lng:myLng},
	    map: map,
	    title: "My Position",
	    icon: image
	});
    mark.setMap(map);
    google.maps.event.addListener(mark, 'click', function() {
	    infowindow.setContent(mark.title);
	    infowindow.open(map, mark);

	});
	    
	    }
	    */

//var myloc = new google.maps.LatLng(myLat, myLng);
//var map;
//var mark;
/*

function getMyLocation(){
    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		console.log(myLat + " " + myLng);
	        //alert(myLat +" " + myLng);
		makeMap(); 
	    });
    }
    else {
	alert("Geolocation not supported on web browser");
    }
}

function makeMap() {
    //var map2 = new google.maps.Map(document.getElementById('map'), {
    //	 zoom: 13,
    // center: new google.maps.LatLng(42.352271, -71.05524200000001),
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    //});
    //var myloc = new google.maps.LatLng(myLat,myLng);
    var myloc = new google.maps.LatLng(myLat, myLng);
	    var mark = new google.maps.Marker({
	    position: myloc,
	    map: map,
	    title: "My Position",
	    icon: image
	});
    mark.setMap(map);
    google.maps.event.addListener(mark, 'click', function() {
	    infowindow.setContent(mark.title);
	    infowindow.open(map, mark);

	});
}
*/
}


function find_closest_marker(lat, lng) {
    
    var closest = 0;
    var minimumdist = 99999;
    console.log("Closest marker",lat,lng);
    for(var i = 0; i<stationDistance.length; i++) {
	//var dist = haversineDist( stationDistance[i].lat, locations[i].lng, myLocation[0].lat, myLocation[0].lng);
	var dist = haversineDist(stationDistance[i].lat, stationDistance[i].lng, lat, lng); 
	console.log(dist);
	if (dist < minimumdist){
	    closest = i;
	    mindist = dist;
	}

    }
    closestLat = stationDistance[closest].lat;
    closestLng = stationDistance[closest].lng;
    /*
    var  latlng = new google.maps.LatLng(lat, lng);
        var mark2 = new google.maps.Marker({
	    position: latlng
	    map: map
	    //	    title: "My Position: Closest Station is " + stationDistance[closest].lat, stationDistance[closest].lng});
	})
    */

    console.log("Closest lat lng",stationDistance[closest].id, stationDistance[closest].lat, stationDistance[closest].lng);
    console.log("Returning", stationDistance[closest].id,dist);
    return stationDistance[closest].id + " " + dist;
				   
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

//google.maps.event.addListener(map, 'click',find_closest_marker); 
google.maps.event.addDomListener(window, 'load', mapping);



