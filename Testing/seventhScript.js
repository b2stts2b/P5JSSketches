let canvasWidth = 1255;
let canvasHeight = 705;
let fontS;


function setup(){
	createCanvas(canvasWidth,canvasHeight);
	fontS = canvasHeight/5
}

function draw(){
	//color the background
	background(0);

	//get time
	let hr = hour();
	let mn = minute();
	let sc = second();

	//Hour-rectangle
	noStroke();
	fill(100,200,50);
	rectMode(CORNERS);
	let hrRect = map(hr,0,24,canvasHeight,0)
	rect(0,canvasHeight,canvasWidth/3,hrRect);

	//Minute-rectangle
	fill(50,100,200);
	let mnRect = map(mn,0,60,canvasHeight,0)
	rect(canvasWidth/3,canvasHeight,canvasWidth/1.5,mnRect);

	//Second-rectangle
	fill(200,500,100);
	let scRect = map(sc,0,60,canvasHeight,0)
	rect(canvasWidth/1.5,canvasHeight,canvasWidth,scRect);

	//change properties of text
	textSize(fontS);
	textAlign(CENTER);
	stroke(255);
	strokeWeight(3);
	fill(0);

	//Display time
	text(hr,canvasWidth/6,canvasHeight/2);
	text(mn,canvasWidth/2,canvasHeight/2);
	text(sc,canvasWidth*5/6,canvasHeight/2);

}