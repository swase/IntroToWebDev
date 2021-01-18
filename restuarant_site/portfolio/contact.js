var userInput = document.forms["userInput"];
userInput.className = "needs-validation";
var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");

function validate() {
	userInput.className = "needs-validation";
	var checkBoxValid = !validateCheckBox(); 
	//check if input is valid
	if(!userInput.checkValidity() || !checkBoxValid) {
		userInput.className = "was-validated";		
		return false;
	}

	//Set output text


	//console.log("success");
	//console.log(_outputNumbers(_start,_end,_step));
	
	return false;

	
}

 function validateCheckBox(){
     var radios = document.getElementsByName("contact_time");
     var checkBoxFeedback = document.getElementById("checkBoxFeedback");

     for (var i = 0, len = radios.length; i < len; i++) {
          if (radios[i].checked) {
          	//console.log("Atleast one box checked");
          	checkBoxFeedback.style.display = "none";
            return true;
          }
     }
     //console.log("No boxes checked");
     checkBoxFeedback.style.display = "";
     return false;
 }

function resetForm() {
	userInput.className = "needs-validation";
	checkBoxFeedback.style.display = "none";


}