var canvas, ctx;

var steps;

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

var x,y;

function step (s,n) {

	x = x || points[0].x;
	y = y || points[0].y;

	for (var i = s; i < n; i++) {

		var a = Math.floor(Math.random()*points.length);

		ctx.fillRect(x,y,1,1);

		x = (x+points[a].x)/2;
		y = (y+points[a].y)/2;
	
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

	steps = 10000000;

	magic();
}

var i = 0;

function magic () {
	step(i*10000,i*10000+10000);
	if(i*10000<steps) {
		setTimeout(function() {
			magic();
		},1);
	}
}