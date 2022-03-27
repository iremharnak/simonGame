/*----- constants -----*/
  const simonBoard = ["red", "green", "blue", "yellow"];

/*----- app's state (variables) -----*/
// simonPatterns will hold all the sequences randomly generated with init
let simonPatterns = [];
let userPatterns = [];
let currentPlayer, round, userClick;
let computerMove = true;
/*----- cached element references -----*/
// board buttons
const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");
const yellowBtn = document.getElementById("yellow");

// prompt text so I can update its content when it's player's/computer's turn & win/loose messages
const promptTxt = document.getElementById("promptTxt");

// buttons to start and reset the game
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

/*----- event listeners -----*/
// board eventListeners
// startBtn.addEventListener('click',)
/*----- functions -----*/

function init() {
  generateSimon();
  console.log(simonPatterns);
  
}
// creating the whole simon sequence
function generateSimon() {
  for (let i = 0; i < 20; i++) {
    let randomNumber = getRandomNumber();
    simonPatterns.push(simonBoard[randomNumber]);
  }
  console.log(simonPatterns);
}

generateSimon()
// generating random number
function getRandomNumber() {
return Math.floor(Math.random() * 4);
}

// in the init create the sequence red red blue etc (done)
// the seq is ready (done)
// the computer will compare an element from what's already been generated
// you're incrementing computer's turn and it will show the next colour in the sequence
// a function to setIntervals (make red, wait one sec, show green, etc)
// 1st generate seq (all the moves the computer will do) (done)
// 2nd how can i have the computer show 1, (turn logic)
showSequence();
function showSequence() {
if (computerMove) {
  
}
}
// variable indicating who's turn it is to see if user is done and another variable how many times the user clicked so far in this round (if x amount of clicks done user can't click) another one for round (round one user's allowed to click once, round 5 user is allowed 5 clicks)


// 1- 'start' triggers eventListener
// 2- run 
        // 1. randomNumberToColor() (which will run randomNumberToColor() 1st)
        // 2. wait for user input (setInterval?)
        // var intervalID = setInterval(function[, delay]);
// 3- Update promptTxt innerHTML to "it's your turn"
// 4- Activate (eventListener)s for the board 
// 5-With user's click, take the input and put it inside the userInput array
// 6- Is the UserInput done? (how to check?)
// 7- If done, compare userInput arr with simonPatterns


