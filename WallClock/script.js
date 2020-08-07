$(document).ready(function() {
	var clock = document.getElementById("DigitalClock");
	var clk = clock.getContext("2d");
	var radius = DigitalClock.height / 2;
	clk.translate(radius, radius);
	radius *= 0.9;
	setInterval(drawClock,1000);

	function drawClock() {
		drawFace(clk, radius);
		drawNumbers(clk, radius);
		drawTime(clk, radius);
	}

	function drawFace (clk, radius) {
		clk.beginPath();
		clk.arc(0, 0, radius, 0, 2*Math.PI);
		clk.fillStyle = "white";
		clk.fill();
		var grad;
		grad = clk.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
		grad.addColorStop(0, "#333");
		grad.addColorStop(0.5, "white");
		grad.addColorStop(1, "#333");
		clk.strokeStyle = grad;
		clk.lineWidth = radius*0.1;
		clk.stroke();
		clk.beginPath();
		clk.arc(0, 0, radius*0.1, 0, 2*Math.PI);
		clk.fillStyle = "#333";
		clk.fill();
	}

	function drawNumbers (clk, radius) {
		var angle, num;
		clk.font = radius*0.15 + "px arial";
		clk.textBaseline = "middle";
		clk.textAlign = "center";
		for (num = 1; num < 13; num ++) {
			angle = num * Math.PI / 6;
			clk.rotate(angle);
			clk.translate(0, -radius * 0.8);
			clk.rotate( - angle);
			clk.fillText(num.toString(), 0, 0);
			clk.rotate(angle);
			clk.translate(0, radius * 0.8);
			clk.rotate( - angle);
		}
	}

	function drawTime (clk, radius) {
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();

		hour %= 12;
		var pi = Math.PI;
		hour = (hour * pi/6) + (minute*pi/360) + (second*pi/(360*60));
		drawHand(clk, hour, radius*0.5, radius*0.07);

		minute = (minute*pi/30) + (second*pi/(30*60));
		drawHand(clk, minute, radius*0.7, radius*0.03);

		second = (second*pi/30);
		drawHand(clk, second, radius*0.8, radius*0.01);
	}

	function drawHand (clk, pos, len, wid) {
		clk.beginPath();
		clk.lineWidth = wid;
		clk.lineCap = "round";
		clk.moveTo(0, 0);
		clk.rotate(pos);
		clk.lineTo(0, -len);
		clk.stroke();
		clk.rotate(-pos);
	}
});