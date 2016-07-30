// Your JavaScript goes here...

var data = new XMLHttpRequest();

function parse() {
    //data.open("GET", "data.json", true);
    data.open("GET", "https://messagehub.herokuapp.com/messages.json", true);


    data.onreadystatechange = function() {
	if(data.readyState == 4 && data.status == 200){
	    console.log("Got data");
	    info = data.responseText;
	    console.log(info);
	    text = JSON.parse(info);
	    document.getElementById("messages").innerHTML = text[0].content + " " + text[0].username + "<br />" + text[1].content + " " + text[1].username;
	}
	else if(data.readyState == 4 && data.status !=200) {
	    document.getElementById("messages").innerHTML = "<p> Something has gone terribly wrong</p>";
	}
	else {
	    console.log("In progress...");
	}
    };

    data.send(null);
}