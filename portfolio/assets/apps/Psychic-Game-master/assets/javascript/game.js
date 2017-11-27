//Sets resets values of game beforestarting game
var wins = 0;
var losses = 0;
var guessesleft = 9;
var guessessofar = 0;
//records value pressed when the key is relaesed
document.onkeyup = function(event) {
  if (event.key.match(/^[a-z]$/)) {
    var userGuess = event.key;
  } else {
    alert("You can only guess a letter!");
  }
//sets possible correct answers
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
//Runs Game
  document.getElementById("guessesfar").innerHTML += userGuess + " ";

  var computerGuess = letters[Math.floor(Math.random() * letters.length)];

  if (userGuess === computerGuess) {
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    guessesleft = 9;
    document.getElementById("guessesleft").innerHTML =
      "Guesses Left: " + guessesleft;
    guessesfar = "";
    document.getElementById("guessesfar").innerHTML =
      "Guesses So Far " + guessesfar;
  } else guessesleft--;
  {
    document.getElementById("guessesleft").innerHTML =
      "Guesses Left: " + guessesleft;
  }

  if (guessesleft < 1) {
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    guessesleft = 9;
    document.getElementById("guessesleft").innerHTML =
      "Guesses Left: " + guessesleft;
    guessesfar = "";
    document.getElementById("guessesfar").innerHTML =
      "Guesses So Far: " + guessesfar;
  }
};
