let raketer = [];
let miniraketer = [];

let intervalId;

let automated = false;

let text;

function setup(){
	createCanvas(755,415);	
	colorMode(HSB, 360, 100, 100,255);
	text = createP("1: Skjut 5 raketer. <br> 2: Skjut 25 raketer. <br> 3: Skjut 1 raket. <br> 4: Automatisera.<br> MusKlick: Skjut 1 raket.");
}

function mousePressed(){
	raketer.push(new Raket(mouseX,mouseY, raketer.length));
}

function keyTyped(){
	RaketPaket(key);
}

function draw(){
	background(0);

	noStroke();
	textSize(50);


	for (let i = 0; i < raketer.length; i++){
		raketer[i].move();
		raketer[i].rita();
		raketer[i].heightCheck();
		raketer[i].explode();
	}

	for(let i = 0; i < miniraketer.length; i++){
		miniraketer[i].move();
		miniraketer[i].rita();
		miniraketer[i].taBort();
	}
}


function RaketPaket(key){
	// 5 vanliga raketer
	if (key == "1") {
		for(let i = 0; i < 5; i++){
			raketer.push(new Raket(i*100+100,random(75,125), raketer.length));
		}
	}
	// 25 raketer i 5x5 mönster
	else if (key == "2"){
		for (let i = 0; i < 5; i++){
			for(let j = 0; j < 5; j++){
				raketer.push(new Raket(i*100+100,j*40+5, raketer.length));
			}
		}
	}
	// Random Raket
	else if (key == "3"){
		raketer.push(new Raket(random(50,width-50),random(25,height-200), raketer.length));
	}
	//automatiserat
	else if (key == "4"){
		if (automated == false){
			intervalId = setInterval(RaketPaket, 1000, "3");
			automated = true;
		}
		else {
			automated = false;
			clearInterval(intervalId);
		}
	}
	//Giant Bomb
	else if (key == "5"){
		raketer.push(new Raket(width/2,100, raketer.length, 50));
	}

}


class Raket{
	constructor(x,y,i, r = random(10,15)){
		this.r = r;
		this.x = random(x-100,x+100);
		this.y = height+this.r/2;
		this.i = i;

		this.goalX = x;
		this.goalY = y;
		this.xSpeed = (this.goalX-this.x)/70;
		this.ySpeed = (this.goalY-this.y)/50;
		this.canExplode = false;
		this.hasExploded = false;

		this.h = random(360);
		this.s = 100;
		this.b = 100;

	}

	move(){
		this.ySpeed += this.ySpeed*-0.02;
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	rita(){
		fill(this.h,this.s,this.b);
		ellipse(this.x,this.y,this.r);
	}

	heightCheck(){
		if(this.ySpeed > -0.5 && this.hasExploded == false){
			this.canExplode = true;
		}
	}

	explode(){
		if (this.canExplode == true && this.hasExploded == false) {
			for(let i = 0; i < 50; i++){
				if(this.r > 15){
					miniraketer.push(new MiniRaketer(this.x,this.y,random(-this.r/7,this.r/7),random(-this.r/10,this.r/10),this.r/3,this.h,this.s,this.b));
				}
				else{
					miniraketer.push(new MiniRaketer(this.x,this.y,random(-3,3),random(-3,3),this.r/2,this.h,this.s,this.b));	
				}
				this.hasExploded = true;
			}

			raketer.splice(this.i,1);
			for ( let i = 0; i < raketer.length;i++){
				raketer[i].i = i;
			}
		}
	}
}

class MiniRaketer{
	constructor(x,y,xSpeed,ySpeed,r,h,s,b,i){
		this.x = x;
		this.y = y;
		this.r = r;

		this.h = h;
		this.s = s;
		this.b = b;

		this.i = i;

		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;

		this.timer = 0;
	}

	move(){
		this.ySpeed -= this.ySpeed*0.01 - 0.01;
		this.xSpeed -= this.xSpeed*0.02;
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		this.timer += random(0.7,2);
		this.r *= 0.995;
	}

	rita(){
		fill(this.h,this.s,this.b,255-this.timer);
		ellipse(this.x,this.y,this.r);
	}

	taBort(){
		if(this.timer >= 200){
			miniraketer.splice(this.i,1);
			for (let i = 0; i < miniraketer.length;i++){
				miniraketer[i].i = i;
			}
		}
	}	
}