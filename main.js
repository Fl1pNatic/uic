var strawberries = 0;
var strawberry = strawberries;
// Vars
var toGive = 1;
var hand = 0;
var twohand = false;

function buyHand(){
    handCost = Math.floor(15 * Math.pow(1.25,hand)); 
    if(strawberries >= handCost){
        strawberries = strawberries - handCost;
        hand = hand + 1;
        console.log("Bought a hand!");
        document.getElementById("hand").innerHTML = hand;
        var nhandCost = Math.floor(15 * Math.pow(1.25,hand));
        document.getElementById('handCost').innerHTML = nhandCost;
    }
}

function buy2Hand(){
    if(strawberries >= 200 && twohand == false){
        strawberries = strawberries - 200;
        twohand = true;
        console.log("Bought 2 Hands!");
        document.getElementById("twohand").innerHTML = twohand;
        document.getElementById('twohandCost').innerHTML = "Already Bought!"
        
    }
}


function addStraw(toGive){
    strawberries = strawberries + toGive;
    document.getElementById("strawCount").innerHTML = strawberries;
    
}

window.setInterval(function(){
	
    if(twohand){
	    addStraw(hand * 2);
    }
    if(!twohand){
	    addStraw(hand);
    }
}, 1000);

// A message
console.log(" _    _            ");
console.log("| |  | |           ");
console.log("| |__| | ___ _   _ ");
console.log("|  __  |/ _ \ | | |");
console.log("| |  | |  __/ |_| |");
console.log("|_|  |_|\___|\__, |");
console.log("              __/ |");
console.log("             |___/ ");

console.log("If you came here just to see cheat yourself some strawberries - I got some great news for you!");
console.log(`Use "addStraw(number)" to get yourself as many strawberries as you would like.`);
console.log("<3, xeight");
console.log("P.S. This game is open-source @ https://github.com/x8c8r/strawberry-clicker");
