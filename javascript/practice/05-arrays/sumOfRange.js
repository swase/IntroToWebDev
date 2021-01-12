var testArray = new Array();
var sum = 0;
var newElement;

alert("Please enter 5 numbers that you wanted summed")

for(var i = 0; i < 5; i++) {
	newElement = prompt("");
	newElement = parseInt(newElement);
	testArray.push(newElement);
}

for (var position = 0; position < testArray.length; position++) {
	sum += testArray[position];
}

console.log("The sum of " + testArray + " is: " + sum);

