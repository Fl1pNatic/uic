var strawberries = 0
var strawberry = strawberries
// Vars
var toGive = 1  
var hand = 0
var twohand = true

function buyHand(){
    handCost = Math.floor(15 * Math.pow(1.25,hand)); 
    if(strawberries >= handCost){
        strawberries = strawberries - handCost
        hand = hand + 1
        console.log("Bought a hand!")
        document.getElementById("hand").innerHTML = hand;
        var nhandCost = Math.floor(15 * Math.pow(1.25,hand));
        document.getElementById('handCost').innerHTML = nhandCost;
    }
}

function buy2Hand(){
    twohandCost = Math.floor(200 * Math.pow(1.25,twohand)); 
    if(strawberries >= twohandCost && twohand == false){
        strawberries = strawberries - twohandCost
        twohand = true
        console.log("Bought 2 Hands!")
        document.getElementById("twohand").innerHTML = twohand;
        var ntwohandCost = Math.floor(200 * Math.pow(1.25,twohand));
        document.getElementById('twohandCost').innerHTML = ntwohandCost;
    }
    else{
        document.getElementById('twohandCost').innerHTML = "Already Bought!"
    }
}


function addStraw(toGive){
    strawberries = strawberries + toGive
    document.getElementById("strawCount").innerHTML = strawberries;
    
}

window.setInterval(function(){
	
	addStraw(hand + twohand);
	
}, 1000);

// A message
console.log(" _    _            ")
console.log("| |  | |           ")
console.log("| |__| | ___ _   _ ")
console.log("|  __  |/ _ \ | | |")
console.log("| |  | |  __/ |_| |")
console.log("|_|  |_|\___|\__, |")
console.log("              __/ |")
console.log("             |___/ ")

console.log("If you came here just to see cheat yourself some cookies - I got some great news for you!")
console.log(`Use "addStraw(number)" to get yourself as many cookies as you would like.`)
console.log("<3, Fl1p")
console.log("P.S. This game is open-source @ https://github.com/Fl1pNatic/strawberry-clicker")