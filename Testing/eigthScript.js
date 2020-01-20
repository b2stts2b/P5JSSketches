let canvasWidth = 400;
let canvasHeight = 400;

function setup(){
	createCanvas(canvasWidth,canvasHeight);
	//UpdatePixels();
	//pixelDensity(1);
}

function draw(){
	background(0);

	loadPixels();

	for (x = 0; x < canvasWidth; x++){
		for (y = 0; y < canvasHeight; y++){
			index = (y*canvasWidth+x)*4;

			let r = map(x,0,canvasWidth,0,255);
			let g = map(y,0,canvasHeight,0,255);
			let b = map(x,0,canvasWidth,255,0);
			let a = 255;
			pixels[index] = r;
			pixels[index+1] = g;
			pixels[index+2] = b;
			pixels[index+3] = a;
		}
	}

	updatePixels();
}

/*function mousePressed(){
	UpdatePixels();
}

function UpdatePixels(){
	loadPixels();

	for (x = 0; x < canvasWidth; x++){
		for (y = 0; y < canvasHeight; y++){
			index = (y*canvasWidth+x)*4;

			let r = map(mouseX,0,canvasWidth,0,255);
			let g = map(mouseY,0,canvasHeight,0,255);
			let b = 0;//random(255);//map(x,0,canvasWidth,0,255);
			let a = random(255);//255;
			pixels[index] = r;
			pixels[index+1] = g;
			pixels[index+2] = b;
			pixels[index+3] = a;
		}
	}

	updatePixels();
}*/