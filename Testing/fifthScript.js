


function setup(){
	createCanvas(500,400);
	background(0,0,50,50);
	noStroke();
	fill(0,200,0);
	rectMode(CENTER);
	rect(250,375,500,50);
}


function mousePressed(){
	if (mouseY < 350) {
		flower(mouseX,375-mouseY);
	}
}
function flower(xPos,flowerHeight){
	let circleDiameter = flowerHeight/2.5+25;
	noStroke();
	fill(0,200,0);
	rect(xPos,350-flowerHeight/2,10,flowerHeight);
	fill(100,100,100);
	ellipse(xPos,350-flowerHeight,circleDiameter,circleDiameter);
	stroke(255);
	strokeWeight(flowerHeight/50);
	for (var i = 0; i < 20; i++) {
		let x = random(-circleDiameter/2,circleDiameter/2);
		let y = random(-sqrt(abs(pow(circleDiameter/2,2)-pow(x,2))),sqrt(abs((pow(circleDiameter/2,2)-pow(x,2)))));	
		point(xPos + x, 350-flowerHeight + y);
		console.log(350-flowerHeight);
		console.log(y);
	}
}