$(document).ready(function() {
	function displayTime () {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var clockDiv = document.getElementById("clock");
		var meridiem = "AM";
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (hours >= 12) {
			hours -= 12;
			meridiem = "PM";
		}
		if(hours == 0) {
			hours = 12;
		}
		clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds + meridiem; 
	}
	setInterval(displayTime, 1000);
});
