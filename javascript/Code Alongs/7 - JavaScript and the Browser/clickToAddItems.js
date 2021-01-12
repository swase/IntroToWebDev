var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {
	numberFun.className = "needs-validation";

	if(!numberFun.checkValidity()) {
		numberFun.className = "was-validated";
		return false;
	}

	var opperand1 = parseInt(num1.value, 10);
	var opperand2 = parseInt(num2.value, 10);

	document.getElementById("addResult").innerText = opperand1 + opperand2;
	document.getElementById("subtractResult").innerText = opperand1 - opperand2;
	document.getElementById("multiplyResult").innerText = opperand2 * opperand1;
	document.getElementById("divisionResult").innerText = opperand1 / opperand2;

	results.style.display = "block";
	submitButton.innerText = "Recalculate";

	return false;
}

function resetView() {
	numberFun.className = "needs-validation";
	results.style.display = "none";
	submitButton.innerText = "Calculate";
	num1.focus();
}