let testBlueprint = function(p){


	p.setup = function(){
		p.createCanvas(300,300);
		p.background(p.random(0,200));
		p.noStroke();
		p.fill(255);
	}

	p.mousePressed = function(){
		if(p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseX < p.height){
			p.ellipse(p.mouseX,p.mouseY,10);
		}
	}
}


let canvas1 = new p5(testBlueprint);
let canvas2 = new p5(testBlueprint);
