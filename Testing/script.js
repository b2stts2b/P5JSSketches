var canvasSize = 300;

function setup(){
	createCanvas(canvasSize,canvasSize);
	rectMode(CENTER);
	fill(255,0,0);
}

function draw(){
	background(255,0,100);
	strokeWeight(3);
	line(100,0,100,300);
	line(200,0,200,300);
	line(0,100,300,100);
	line(0,200,300,200);
	strokeWeight(1);
	if (mouseX<100) {
		fill(255,0,0);
	}else if(mouseX < 200){
		fill(0,255,0);
	} else if(mouseX<300){
		fill(0,0,255);
	}
	if (mouseY<100) {
		ellipse(150,150,50,50);
	} else if(mouseY<200){
		rect(150,150,50,50);
	}else if (mouseY>=200){
		triangle(150,125,150+cos(PI/6)*25,150+sin(PI/6)*25,150-cos(PI/6)*25,150+sin(PI/6)*25);
	}

}
