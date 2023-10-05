var punchAudio = document.getElementById("punchSound");
var kickAudio = document.getElementById("kickSound");
var blockAudio = document.getElementById("blockSound");


function Audio1(num) {
	document.getElementById("fillTwo").innerHTML = (ninjaLook.name + " punched " + Math.floor(Math.random() * 11) + " times.")
	punchSound.play();
}

function Audio2(num) {
	document.getElementById("fillTwo").innerHTML = (ninjaLook.name + " kicked " + Math.floor(Math.random() * 11) + " times.")
	kickSound.play();
}

function Audio3(num) {
	document.getElementById("fillTwo").innerHTML = (ninjaLook.name + " blocked the incoming attack")
	blockSound.play();
}

var aboutNinja = {
    eyeColor: "",
    hairColor: "",
    beltColor: "",
    dressColor: "",
    shoeColor: "",
};
	
function myNinja() {
		aboutNinja.eyeColor = prompt("What's the eye color?");
		aboutNinja.hairColor = prompt("What's the hair color?");
		 aboutNinja.beltColor = prompt("What's the beltcolor?");
		 aboutNinja.dressColor = prompt("What's the dress color?");
		 aboutNinja.shoeColor = prompt("What's the shoe color?");
	
	document.getElementById("flower").innerHTML=("Eye color is " + aboutNinja.eyeColor+  "his hair color is" + aboutNinja.hairColor + "the belt color is" + aboutNinja.beltColor + "the dress color is" + aboutNinja.dressColor + "And the shoe color is" + aboutNinja.shoeColor)
	};
	

	
