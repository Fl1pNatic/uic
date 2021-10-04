var titles = 0;
giveAmount = 1;
var lastUpdate = Date.now()

function changeTitle(){
	var titleLol = prompt("Enter your title", "Untitled")
	if(titleLol == null){
		titleLol = "Untitled"
	}
	document.getElementById("titleItself").textContent = titleLol
}

function addTitle() {
	titles = titles + giveAmount;
}

function updateUI(){
	document.getElementById("titles").textContent = "Titles: " + titles;
	document.title = "Untitle Incremental Game: " + titles + " titles available."
}

function mainLoop() {
  updateUI()

  lastUpdate = Date.now()
}

setInterval(mainLoop, 50)