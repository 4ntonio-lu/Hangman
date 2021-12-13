var words = [ ["pomegrante", "a fruit"], ["warriors", "an NBA team"], ["netherlands", "a European country"], ["wyoming", "a US State"], ["angular", "a JavaScript framework"], ["popeyes", "a fast food chain"], ["kayak", "a type of boat"], 
 ["porsche", "a high performance automobile manufacturer"], ["monopoly", "a board game"], ["motherboard", "a computer part"], ["knight", "a chess piece"], ["microwave", "a kitchen appliance"], ["xylophone", "a musical instrument"] ];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',	'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var display = "";
var answer = "";
var win = false;
var lives = 6;
var hint = "";

function input(letter) {
	if (win == true) {
		return;
	}
	const button = document.getElementById(letter);
    button.disabled = true;
	let correct = false;
	for (let i = 0; i < answer.length; i++) {
		if (letter == answer[i]) {
			display = (display.substring(0, i) + letter + display.substring(i + 1, answer.length));
			button.style.background = "#8b6be3";
			button.style.color = "white"
            correct = true;
		}
	}
	if (correct == false) {
		button.style.background = "black";
		button.style.color = "white"
		lives--;
		drawHangman();
	}
	else {
		document.getElementById("hiddenword").innerHTML = display;
		let total = 0;
		for (let i = 0; i < answer.length; i++) {
			if (display[i] != '_') {
				total++;
			}
		}
		if (total == answer.length) {
			win = true;
			drawHangman();
		}
	}
}

function showhint() {
	document.getElementById("hintbutton").style.display = "none";
	document.getElementById("hint").style.display = "block";
}

function drawHangman() {
	if (lives == 6 && win == true) {
        document.getElementById("hangman6").style.display = "none";
        document.getElementById("hangman6win").style.display = "block";
	}
    else if (lives == 6) {
        document.getElementById("hangman6").style.display = "block";
    }
	else if (lives == 5 && win == true) {
        document.getElementById("hangman5").style.display = "none";
        document.getElementById("hangman5win").style.display = "block";
	}
	else if (lives == 5) {
        document.getElementById("hangman6").style.display = "none";
        document.getElementById("hangman5").style.display = "block";
		document.getElementById("hearts").innerHTML = "&#128420 &#128156 &#128156 &#128156 &#128156 &#128156";
	}
	else if (lives == 4 && win == true) {
        document.getElementById("hangman4").style.display = "none";
        document.getElementById("hangman4win").style.display = "block";
	}
	else if (lives == 4) {
        document.getElementById("hangman5").style.display = "none";
        document.getElementById("hangman4").style.display = "block";
		document.getElementById("hearts").innerHTML = "&#128420 &#128420 &#128156 &#128156 &#128156 &#128156";
	}
	else if (lives == 3 && win == true) {
        document.getElementById("hangman3").style.display = "none";
        document.getElementById("hangman3win").style.display = "block";
	}
	else if (lives == 3) {
        document.getElementById("hangman4").style.display = "none";
        document.getElementById("hangman3").style.display = "block";
		document.getElementById("hearts").innerHTML = "&#128420 &#128420 &#128420 &#128156 &#128156 &#128156";
	}
	else if (lives == 2 && win == true) {
        document.getElementById("hangman2").style.display = "none";
        document.getElementById("hangman2win").style.display = "block";
	}
	else if (lives == 2) {
        document.getElementById("hangman3").style.display = "none";
        document.getElementById("hangman2").style.display = "block";
		document.getElementById("hearts").innerHTML = "&#128420 &#128420 &#128420 &#128420 &#128156 &#128156";
	}
	else if (lives == 1 && win == true) {
        document.getElementById("hangman1").style.display = "none";
        document.getElementById("hangman1win").style.display = "block";
	}
	else if (lives == 1) {
        document.getElementById("hangman2").style.display = "none";
        document.getElementById("hangman1").style.display = "block";
		document.getElementById("hearts").innerHTML = "&#128420 &#128420 &#128420 &#128420 &#128420 &#128156";
	}
	else if (lives == 0) {
        document.getElementById("hangman1").style.display = "none";
        document.getElementById("hangman0lose").style.display = "block";
		document.getElementById("hearts").innerHTML = "&#128420 &#128420 &#128420 &#128420 &#128420 &#128420";
	}
}

function randomWord() {
	let random = (Math.floor(Math.random() * words.length));
	answer = words[random][0];
	hint = words[random][1];
	for (let i = 0; i < answer.length; i++) {
		display += "_";
	}
	document.getElementById("hiddenword").innerHTML = display;
	document.getElementById("hint").innerHTML = hint;
	lives = 6;
	createButtons();
	drawHangman();
}

function createButtons() {
	let text = "";
	for (let i = 97; i < 97 + 26; i++) {
		let letter = String.fromCharCode(i);
		text += `<button id = ${letter} class = "input" onClick = "input('${letter}')">${letter}</button>`;		
	}
	document.getElementById("buttons").innerHTML = text;
}

function KeyPress(e) {
	
	input(String.fromCharCode(e.which));
}

randomWord();