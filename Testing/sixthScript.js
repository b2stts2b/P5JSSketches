let bubbles = [];
let canvasSize = 500;
let speed = 2;
let speedChange = 0.005;

function setup(){
	createCanvas(canvasSize,canvasSize*300/500);
	noFill();
	stroke(255);
	strokeWeight(2);

}

function draw(){
	background(0);

	for (let i = 0; i < bubbles.length; i++) {
			bubbles[i].Move();
		}

	for (let k = 0; k < bubbles.length; k++){
		for (let l = 0; l < bubbles.length; l++){
			if (k!=l) {
				if (bubbles[k].isIntersecting(bubbles[l])){
				break;
				}
			}
			
		}
	}


	for ( let i = 0; i < bubbles.length; i++){
		bubbles[i].Show();
	}

}

function mousePressed(){

	bubbles.push(new Bubble(mouseX,mouseY));
}

function mouseWheel(event){
	if (speed > 100*speedChange) {
		speed -= event.delta*speedChange;
	} else if (event.delta < 0) {
		speed -= event.delta*speedChange;	
	}	
	print(speed);
}

class Bubble {
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.size = random(10,25);
		this.brightness = 255;
		this.alpha = 0;
		this.stroke = 255;
	}

	Move() {
		this.x += random(-speed,speed);
		this.y += random(-speed,speed);
	}

	isIntersecting(other){
		let d = dist(this.x,this.y,other.x,other.y);
		if (d < this.size + other.size) {
			this.alpha = 255;
			this.stroke = 0
			return true;
		}
		else {
			this.alpha = 0;
			this.stroke = 255;
			return false;
		}
	}

	Show() {
		stroke(this.stroke);
		fill(this.brightness, this.alpha);
		ellipse(this.x,this.y,this.size*2);
	}
}