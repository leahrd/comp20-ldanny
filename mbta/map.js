//maybe connect css file
console.log("I'm about to start the mapping function");
     function mapping(){
	 console.log("I'm in the mapping function!");
	 var mapProps =new google.maps.LatLng(42.352271,-71.05524200000001);
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


