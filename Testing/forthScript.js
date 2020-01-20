var canvasSize = 500;
var distance = 50;
var diameter = 25;


function setup(){
	createCanvas(canvasSize,canvasSize);
	fill(150,0,150);
	stroke(255);
	strokeWeight(diameter*3/25);
}


function draw(){
	background(0);

	for (var i = 0; i <= width; i+= distance) {
		for (var j = 0; j <= height; j+= distance) {
			fill(random(255),0,random(255));
			ellipse(i,j,diameter,diameter);
		}
	}
}