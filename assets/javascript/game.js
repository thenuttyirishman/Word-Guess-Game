window.onload=function(){
var newGameButton = document.getElementById('new-game-button');
var placeholders = document.getElementById('placeholders');
var guessedLetters = document.getElementById('guessed-letters');
var guessesLeft = document.getElementById('guesses-left');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');

var wordBank = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", 
                "astroid", "nebula", "galaxy", "orionsbelt", "comet", "meteroid", "supernova", "star",
                "extraterrestrial", "bigdipper", "littedipper", "blackhole", "solarsystem", "moon",
                "spaceship", "spaceman"];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLettersBank = [];
var incorrectLettersBank = [];

function newGame() {
    gameRunning = true;
    guessesLeft = 5;
    guessedLettersBank = [];
    incorrectLettersBank = [];
    pickedWordPlaceholderArr = [];

    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];


    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i] === '') {
        pickedWordPlaceholderArr.push(' ');
      } else {
        pickedWordPlaceholderArr.push('_ ');   
      }
   }
   guessesLeft.textContent = guessesLeft;
   placeholders.textContent = pickedWordPlaceholderArr.join('');
   guessedLetters.textContent = incorrectLettersBank;
  }

  function letterGuess(letter) {
    console.log(letter);
    
    if (gameRunning === true && guessedLettersBank.indexOf(letter) === -1){
      guessedLettersBank.push(letter);
    
    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i] === letter) {
        pickedWordPlaceholderArr[i] = pickedWord[i];
      }
    }

    placeholders.textContent = pickedWordPlaceholderArr.join('');
    checkIncorrect(letter);

    }
    else {
      if (!gameRunning) {
        alert("Game Over. Click the new game button to start over!");
      } else  {
        alert("You've already guessed this letter. Try again!");
      }
    }
  }

  function checkIncorrect(letter) {
    if (pickedWordPlaceholderArr.indexOf(letter) === -1 && 
    pickedWordPlaceholderArr.indexOf(letter) === -1) {
    guessesLeft--;
    incorrectLettersBank.push(letter);
    guessedLetters.textContent = incorrectLettersBank.join(' ');
    guessesLeft.textContent = guessesLeft;
    }
    checkLoss();
  }
  
  function checkLoss() {
    if (guessesLeft === 0) {
    losses++;
    gameRunning = false;
    losses.textContent = losses;
    }
    checkWins();
  }

  function checkWins() {
    if (pickedWordPlaceholderArr === pickedWordPlaceholderArr.join())
    {
      wins++;
      gameRunning = false;
      wins.textContent
    }
  }

    newGameButton.addEventListener("click", function(){
      newGame();
    })
    document.onkeyup = function(event) {
      if (event.keyCode >= 65 && event.keyCode <= 90) {
      letterGuess(event.key.toLowerCase())
      }
    }
  }
