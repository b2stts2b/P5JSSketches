var cirkel = {
	ySpeed:0,
	xSpeed:0,
	x:250,
	y:250,
	radius:25
};

var triangel = {
	xSpeed:0,
	ySpeed:0,
	radius:35,
	x:250,
	y:250
};

var rektangel = {
	xSpeed:0,
	ySpeed:0,
	x:250,
	y:250,
	width:30,
	height:25
};

function setup(){
	createCanvas(400,400);
	
	noFill();
	stroke(255);
	strokeWeight(3);
	
	rectMode(CENTER);
	changeValues();
}

function draw() {
	background(0);

	//cirkel
	if (pow(mouseX-cirkel.x,2)+pow(mouseY-cirkel.y,2)<pow(cirkel.radius,2)) {
		fill(0,100,0);
	}
	else {
		noFill();
	}
	ellipse(cirkel.x,cirkel.y,2*cirkel.radius,2*cirkel.radius);
	cirkel.x+=cirkel.xSpeed;
	cirkel.y+=cirkel.ySpeed
	if (cirkel.x>(width-cirkel.radius)||cirkel.x<cirkel.radius) {
		cirkel.xSpeed*=-1;
	}
	if (cirkel.y<cirkel.radius||cirkel.y>(height-cirkel.radius)) {
		cirkel.ySpeed*=-1;
	}

	//rektangel
	if (mouseX>rektangel.x-rektangel.width && mouseX<rektangel.x+rektangel.width && mouseY>rektangel.y-rektangel.height && mouseY<rektangel.y+rektangel.height) {
		fill(0,0,100);
	}
	else {
		noFill();
	}
	rect(rektangel.x,rektangel.y,2*rektangel.width,2*rektangel.height);
	rektangel.x+=rektangel.xSpeed;
	rektangel.y+=rektangel.ySpeed;
	if (rektangel.x>(width-rektangel.width)||rektangel.x<rektangel.width) {
		rektangel.xSpeed*=-1;
	}
	if (rektangel.y<rektangel.height||rektangel.y>(height-rektangel.height)) {
		rektangel.ySpeed*=-1;
	}

	//triangel
	if (mouseY>triangel.y-triangel.radius && mouseY<triangel.y+triangel.radius*sin(PI/6) && abs(mouseX-triangel.x)<cos(PI/6)*triangel.radius && abs(mouseX-triangel.x)*(triangel.radius*(1+sin(PI/6))/(triangel.radius*cos(PI/6)))<mouseY-(triangel.y-triangel.radius)) {
		fill(100,0,0);
	}
	else {
		noFill();
	}
	triangle(triangel.x,triangel.y-triangel.radius,triangel.x+cos(PI/6)*triangel.radius,triangel.y+sin(PI/6)*triangel.radius,triangel.x-cos(PI/6)*triangel.radius,triangel.y+sin(PI/6)*triangel.radius);
	triangel.x+=triangel.xSpeed;
	triangel.y+=triangel.ySpeed;
	if (triangel.x>width-cos(PI/6)*triangel.radius || triangel.x<cos(PI/6)*triangel.radius){
		triangel.xSpeed*=-1;
	}
	if (triangel.y<triangel.radius || triangel.y>height-sin(PI/6)*triangel.radius) {
		triangel.ySpeed*=-1;
	}

}

function changeValues(){
	let speed = 0.2;
	cirkel.xSpeed = speed*random(2,5);
	cirkel.ySpeed = speed*random(2,5);
	rektangel.xSpeed = speed*random(2,5);
	rektangel.ySpeed = speed*random(2,5);
	triangel.xSpeed = speed*random(2,5);
	triangel.ySpeed = speed*random(2,5);
}