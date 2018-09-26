var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var win = 0;
var loss = 0;
var guessLeft = 9;
var guessChoice =[];

var wintext = document.getElementById("win")
var losstext = document.getElementById("loss")
var guessLefttext = document.getElementById("guessLeft")
var guessChoicetext = document.getElementById("guessChoice")

document.onkeyup = function (event) {
     var userGuess = event.key;
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userGuess === computerGuess) {
        win++
        guessLeft = 9;
        guessChoice = [];
        alert("You won!!!");
     }
    else if (userGuess !== computerGuess) {
        loss++
        guessLeft--;
        guessChoice.push(userGuess);
    }
    if (guessLeft < 1) {
        alert("You lose!");
        guessLeft = 9;
        guessChoice = [];
        losses++;}
    wintext.textContent = win
    losstext.textContent = loss
    guessLefttext.textContent = guessLeft
    guessChoicetext.textContent = guessChoice

 }