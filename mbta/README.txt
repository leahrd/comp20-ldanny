//Lab10
//Leah Danny
//8/3/16
//Web Programming


I was able to successfully to determine my geolocation and put the default red pin as the marker.  I was also able to display an 
infowindow at that marker that gave the closest MBTA Red Line station and how far away the station is from my location.  I was also 
able to draw a polyline that connects my marker to the closest Red Line station.  I had a lot of trouble with displaying an infowindow
with the schedule of upcoming trains for each of the stations, but at the end of the day I made it work.  I tried to create a separate function, checkSchedule but whenever I called the function, it returned a value of undefined.  I realized this was happening because the function wasn't finishing before a 
value was returned but I couldn't figure out why this was happening in the time alloted.  Because of this, I essentially took what I 
had in my checkSchedule function and wrote it for each of the markers.  I understand that this is certainly not modular and isn't good
practice but since I wasn't able to get my checkSchedule function working, I decided this would be better than no functionality.  I've kept the checkSchedule function at the bottom of my code in case you would like to take a look.  I will continue to try to figure out what the problem was after the deadline.  I apologize in advance for the massive amount of code that resulted.  

I discussed this assignment briefly with the course TA, John and I used the Haversine Formula resources posted on the course website,
specifically the Stack Overflow link. 

I spent approximately 10 hours on this assignment.
