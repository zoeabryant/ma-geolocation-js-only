// thanks to this blog post:
// http://diveintohtml5.info/geolocation.html#geo-js
var output = '';

function get_lng_lat(position) {
	// get lat/lng
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	// get current date, then only the time (assuming we clear records after a day)
	var date = new Date();
	var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

	// user feedback: append to body
	$('h1').append('<br><br>time: ' + time +'<br>latitude: ' + latitude + '<br>longitude ' + longitude)

	// console log a potential JSON format
	output = { time: time, location: { lat: latitude, lng: longitude } }
	console.log(output)
}

function get_location() {
	// Called on page load
	// navigator.geolocation.getCurrentPosition(get_lng_lat);

	// will be called every time the user’s location changes.
	// really seems to vary how often this is called, Firefox seemed to check a lot more than Chrome.
	user = navigator.geolocation.watchPosition(get_lng_lat);
	console.log(user)
}

// finally, call it
get_location()
