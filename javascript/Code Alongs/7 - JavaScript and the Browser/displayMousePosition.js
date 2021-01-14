var tracking = false;

//DOM references
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

function toggle() {
	
	if(tracking) {
		this.classList.remove("btn-danger");
		this.classList.add("btn-success");
		this.innerText = "Start mouse tracking.";

		mouseX.innerText = "Untracked";
		mouseY.innerText = "Untracked";

	}
	else {
		this.classList.remove("btn-success");
		this.classList.add("btn-danger");
		this.innerText = "Stop mouse tracking.";
	}

	tracking = !tracking;
	trackingLabel.innerText = tracking;
}

function updateMousePosition(evt) {
	trackingLabel.innerText = tracking;
	if(tracking) {
		mouseY.innerText = evt.clientY;
		mouseX.innerText = evt.clientX;
		
	}
}

document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);
