var userInput = document.forms["userInput"];
var results = document.getElementById("results");
var playButton = document.getElementById("playButton");
var startingBet = document.getElementById("startingBet");
var resetBtn = document.getElementById("resetBtn");
var output = document.getElementById("output");

function validate() {
	userInput.className = "needs-validation";

	//check if input is valid
	if(!userInput.checkValidity()) {
		userInput.className = "was-validated";		
		return false;
	}

	//Set output text


	//console.log("success");
	//console.log(_outputNumbers(_start,_end,_step));
	play();
	
	return false;

	
}

function play() {
	//Set up initial values for Game
	var startingAmount = parseInt(startingBet.value,10);
	var totalRolls = 0;
	var maxCash = startingAmount;
	var maxCashRollCount = 0;
	var currentCash = startingAmount;
	var die = new Array();
	//Diable input
	playButton.disabled = "disabled";
	resetBtn.disabled = "";
	startingBet.disabled = "disabled";





	while(currentCash > 0.00) {
		//roll Dice
		die[0] = rollDice(6);
		die[1] = rollDice(6);
		totalRolls++;

		//The player Wins if the Ssum of the die is 7
		if(sumArray(die) == 7) {
			currentCash += 4;
			if(currentCash > maxCash) {
				maxCash = currentCash;
				maxCashRollCount = totalRolls;
			}

		}else {
			currentCash--;
		}

	}
	var _results = [startingAmount,totalRolls,
	maxCash,maxCashRollCount];
	console.log(_results);
	displayResults(_results);


}

function displayResults(arrayOfValues) {
	//Add values to HTML element
	document.getElementById("startingBetTable").innerText ="$ " +
	arrayOfValues[0];
	document.getElementById("totalRollCount").innerText = 
	arrayOfValues[1];
	document.getElementById("mostWon").innerText = "$" +
	arrayOfValues[2];
	document.getElementById("rollCountAtHighest").innerText = 
	arrayOfValues[3];

	//Display Results
	output.style.display = "inline-grid";


}

function rollDice(numSides) {
	result =  Math.floor(Math.random() * numSides) + 1;
	//console.log(result);
	return result;
}

function sumArray(arr) {
	sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	//console.log(sum);
	return sum;
}

function resetGame() {
	userInput.className = "needs-validation";
	output.style.display = "none";
	//submitButton.innerText = "Calculate";
	startingBet.innerText = 0.00
	startingBet.focus();
	resetBtn.disabled = "disabled";
	playButton.disabled = "";
	startingBet.disabled = "";
}