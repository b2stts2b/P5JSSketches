let trainingInput = [[0,0,1]
					,[1,1,1]
					,[1,0,1]
					,[0,1,1]];

let trainingOutput = [0,1,1,0];
let trainingRounds = 10000;

let weights = [];


function setup(){
	noCanvas();
	//make random weights
	randomizeWeights();
	print("Evaluation before training: ");
	print(sigmaFunc(1));
	//train the network
	training();
	//test the network
	print("Evaluation after training: ");
	print(sigmaFunc(1));
	print(weights);

}


function training(){
	let iterations = 0;
	while(iterations < trainingRounds){
		for (let i = 0; i < weights.length; i++){
			let addition = sigmaFunc(i);
			let error =trainingOutput[i]-addition;
			let adjustments = error*sigmoid(trainingOutput[i]);
			for(j = 0; j < weights.length; j++){
					weights[j] += adjustments*trainingInput[i][j];			
			}
		}
		iterations++;
	}
}

function randomizeWeights(){
	for (let i = 0; i < trainingInput[0].length; i++){
		weights.push(2*random(-1,1)-1);
	}
}

function sigmaFunc(trainingIndex){
	let sum = 0;
	for (let i = 0; i < weights.length; i++){
		sum += weights[i]*trainingInput[trainingIndex][i];
	}

	let normalizedSum = 1/(1+exp(-sum));
	return normalizedSum;
}

function sigmoid(x){
	return x*(1-x)
}