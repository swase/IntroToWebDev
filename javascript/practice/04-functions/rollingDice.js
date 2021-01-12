var numSides = prompt("How many sides does the die have?: ");
var numDie = prompt("How many die are you using?: ")

for (var i = 0; i < numDie; i++) {
	console.log(rollDice(numSides));
}

function rollDice(numSides) {
	return Math.floor(Math.random() * numSides) + 1;
}

