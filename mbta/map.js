//maybe connect css file

console.log("I'm about to start the mapping function");
     function mapping(){
	 console.log("I'm in the mapping function!");
	 var map = new google.maps.Map(document.getElementById('map'), {
		 zoom: 16,
		 center: new google.maps.LatLng(42.352271, -71.05524200000001),
		 mapTypeId: google.maps.MapTypeId.ROADMAP
	     });
	 var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

	 //function addMarker(feature){
	 var marker = new google.maps.Marker({
		 position: {lat:42.352, lng: -71.055},
		 //position:feature.position,
		 map: map,
		 icon: image

		 });
	 // }
	 var marker2 = new google.maps.Marker({
		 position: {lat:42.3884,lng:-71.11914899999999},
		 map: map,
		 icon:image
	     });
	 var marker3 = new google.maps.Marker({
		 position: {lat:42.330154,lng:-71.057655},
		 map: map,
		 icon:image
	     });
	  var marker4 = new google.maps.Marker({
		 position: {lat:42.373362,lng:-71.118956},
		 map: map,
		 icon:image
	     });
	   var marker5 = new google.maps.Marker({
		 position: {lat:42.320685,lng:-71.052391},
		 map: map,
		 icon:image
	     });
	
   
	 /*	  
	 var features = [
			 {
			     position: new google.maps.LatLng(42.3884,-71.11914899999999),
      			 }
			 ];
	 for(var i=0,feature; feature = features[i];i++){

	     console.log("I'm in the for loop");
	     console.log(i);
	     addMarker(feature);
	 }
     }
	 */

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

