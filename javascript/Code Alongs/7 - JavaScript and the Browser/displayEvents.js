var userNumbers = document.forms["userNumbers"];
var start = document.getElementById("start");
var end = document.getElementById("end");
var step = document.getElementById("step");

//labels and output
var outputLabel = document.getElementById("outputLabel");
var outputNumbers = document.getElementById("outputNumbers");

function validate() {
	userNumbers.className = "needs-validation";
	var _start = parseInt(start.value,10);
	var _end = parseInt(end.value,10);
	var _step = parseInt(step.value,10);

	var valid = customValidate(_start,_end,_step)

	if(!userNumbers.checkValidity() || !valid) {
		userNumbers.className = "was-validated";		
		return false;
	}

	//Set output text
	outputLabel.innerText = "The even numbers between " + _start + " and " +
	_end + "(inclusive), with a step of " + _step + " is shown below."

	outputNumbers.innerText = _outputNumbers(_start,_end,_step);

	//console.log("success");
	//console.log(_outputNumbers(_start,_end,_step));

	return false;

	
}

function customValidate(_start,_end,_step) {
	var _valid = true;

	if ( (_start >= _end) || (_start + _step > _end ) ) {
		end.setCustomValidity("Increase Value");
		end.reportValidity();
		_valid = false;
	}
	else {
		end.setCustomValidity("");
	}
	return _valid;
}

function _outputNumbers(_start,_end,_step) {
	text = "";
	for(var i = _start; i <= _end; i++) {
		if (i % 2 == 0) {
			text += i;
			text += "\n";
		}
	}
	return text;
}