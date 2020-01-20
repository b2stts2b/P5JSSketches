let kryp = [];

function setup(){
	createCanvas(1000,600);
	fill(255);
}

function draw(){
	background(100);

	for (let i = 0; i < kryp.length; i++){
		kryp[i].update();
		kryp[i].show();
	}
}


function mousePressed(){
	kryp.push(new Kryp(mouseX,mouseY));
}


class Kryp{
	constructor(x,y){
		this.x = x;
		this.y = y;

		this.history = [];
	}

	update(){
		this.x += random(-20,20);
		this.y += random(-10,10);

		let v = createVector(this.x,this.y);
		this.history.push(v);
		if (this.history.length > 100){
			this.history.splice(0,1);
		}
	}

	show(){
		fill(255);
		stroke(255);
		strokeWeight(2);
		ellipse(this.x,this.y,25);
		noFill();
		beginShape();
		for (let i = 0; i < this.history.length; i++){
			let pos = this.history[i];
			vertex(pos.x,pos.y);
		}
		endShape();
	}
}
