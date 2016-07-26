
     function mapping(){
	 console.log("I'm in the mapping function!");
	 var map = new google.maps.Map(document.getElementById('map'), {
		 zoom: 16,
		 center: new google.maps.LatLng(42.352271, -71.05524200000001),
		 mapTypeId: google.maps.MapTypeId.ROADMAP
	     });
	 var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';


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
		   strokeWeight:2
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
		   strokeWeight:2
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
		   strokeWeight:2
	       });
	   mbtaPath3.setMap(map);

   

     }
google.maps.event.addDomListener(window, 'load', mapping);



	 /*	 var mapProps =new google.maps.LatLng(42.352271,-71.05524200000001);
	 var mapPropOpt={
	     zoom:5,
	     center:mapProps
	 };
	 
	     //mapTypeId:google.maps.MapTypeId.ROADMAP
    
	 var map = new google.maps.Map(document.getElementById("map"),mapPropOpt);
	 var contentString = 'South Station';
	 var infowindow = new google.maps.InfoWindow({});
	 var marker = new google.maps.Marker({
		 posiion: mapProps,
		 map: map,
		 title: 'S Station'
	     });

       	 google.maps.event.addListener(marker, 'click',function mapping());
     }
google.maps.event.addDomListener(window,'load',mapping);
	 */
