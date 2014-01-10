var canvas, ctx;

var width, height;

var points = [];

function polygon (n) {
	var m = {
		x:width/2,
		y:height/2
	}
	var r = (m.x < m.y)?m.x:m.y;
	var a = 2 * Math.PI / n;

	for (var i = 0; i < n; i++) {
		points.push({
			x: m.x + r * Math.cos(i * a),
			y: m.y - r * Math.sin(i * a)
		});
	}
}

function step (n) {

	var x = points[0].x;
	var y = points[0].y;

	for (var i = 0; i < n; i++) {

		var a = Math.floor(Math.random()*points.length);

		ctx.fillRect(x,y,1,1);

		x = (x+points[a].x*(points.length-2))/(points.length-1);
		y = (y+points[a].y*(points.length-2))/(points.length-1);
	
	}
}

window.onload = function () {
	canvas = document.getElementsByTagName('canvas')[0];

	width = window.innerWidth;
	height = window.innerHeight;

	canvas.height = height;
	canvas.width = width;

	ctx = canvas.getContext('2d');

	polygon(prompt('polygon count'));

	step(prompt('steps'));
}