let canvasWidth = 1000;
let canvasHeight = 400;
let dx = canvasWidth/3;
let dy = 20;

let lineWeight = 1;
let dotWeight = 3;

let highestLayer = 0;

let t;

function setup(){
	createCanvas(canvasWidth,canvasHeight);
	background(0);
	stroke(255);
	strokeWeight(10);
	t = new Tree();
}

function mousePressed(){
	if (mouseButton == LEFT) {
		t.addNode(new Node(mouseX));
	} else if (mouseButton == RIGHT) {
		background(0);
		t.show();
		fill(255);
		stroke(255);
		textSize(50);
		strokeWeight(3);
		text(highestLayer,100,100)
	}

}




class Tree {
	constructor(){
		this.x = canvasWidth/2;
		this.y = 25;
		this.root = null;
	}

	addNode(node){
		if (this.root == null) {
			this.root = node;
			highestLayer = 1;
		}
		else {
			this.root.addNode(node);
		}
	}

	show(){
		if (this.root != null) {
			this.root.showOnScreen(this.x,this.y);
		}
	}
}

class Node {
	constructor(val){
		this.x;
		this.y;

		this.left = null;
		this.right = null;
		this.value = val;
		this.layer = 1;
	}

	addNode(node){ 
		if (this.value > node.value) {
			node.layer++;
			if (node.layer > highestLayer){
				highestLayer = node.layer;
			}
			if (this.left == null) {
				this.left = node;

			} else {
				this.left.addNode(node);
			}
		}
		else if(this.value < node.value){
			node.layer++;
			if (node.layer > highestLayer){
				highestLayer = node.layer;
			}
			if (this.right == null) {
				this.right = node;
			} else {
				this.right.addNode(node);
			}
		}
	}

	showOnScreen(x,y){
		this.x = x;
		this.y = y;
		if (this.left != null){
			strokeWeight(lineWeight);
			stroke(255);
			line(x,y,x-dx*pow(0.5,this.layer),y+dy);
		}
		if (this.right != null){
			strokeWeight(lineWeight);
			stroke(255);
			line(x,y,x+dx*pow(0.5,this.layer),y+dy);
		}
		strokeWeight(dotWeight);
		stroke(255,0,0);
		point(x,y);
		if (this.left != null) {
			this.left.showOnScreen(x-dx*pow(0.5,this.layer),y+dy);
		}
		if (this.right != null){
			this.right.showOnScreen(x+dx*pow(0.5,this.layer),y+dy);
			
		}
	}


}
