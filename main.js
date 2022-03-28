/*----- constants -----*/
  const simonBoard = ["red", "green", "blue", "yellow"];

/*----- app's state (variables) -----*/
// simonPattern will hold all the sequences randomly generated with init
let simonPattern = [];
let userPattern = [];
let userClick = 0;
let turn = 1;
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
redBtn.addEventListener('click', takeUserInput);
greenBtn.addEventListener('click', takeUserInput);
blueBtn.addEventListener('click', takeUserInput);
yellowBtn.addEventListener('click', takeUserInput);
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

/*----- functions -----*/

// initilize full sequence, board & game
function init() {
  simonPattern = [];
  userPattern = [];
  userClick = 0;
  turn = 1;
  generateSimon();
  
}
// 1st generate simon seq (all the moves the computer will do) 
function generateSimon() {
  for (let i = 0; i < 10; i++) {
    let randomNumber = getRandomNumber();
    simonPattern.push(simonBoard[randomNumber]);
  }
  console.log(simonPattern);
}
// generating random number for simon
function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

// start btn function
function startGame() {
  showSequence();
}


// 2nd how can i have the computer show 1, (turn logic)
// showSequence();
function showSequence() {
for (let i = 0; i <turn; i++) {
    console.log(simonPattern[i])
    let timeToTrigger = i * 1000;
    console.log(timeToTrigger)
    if (simonPattern[i]=== "red") {
      setTimeout(addRedGlow(),timeToTrigger);
      
    } else if (simonPattern[i]=== "green") {
      setTimeout(addGreenGlow(),timeToTrigger);
      
    } else if (simonPattern[i]=== "blue") {
      setTimeout(addBlueGlow(), timeToTrigger);
    } else {
      setTimeout(addYellowGlow(),timeToTrigger);
    }
    // setTimeout(removeGlow(), 10000);

  }
  console.log(turn);
}
// set the turn after showSequence (turn++);



function validateTurn() {
  // once the sequence's delivered wait for input, if nothing for 10sec -> gameOver
  let inputTimer = setTimeout(gameOver(), 10000);
  checkPatterns();
  console.log('it is working')
  clearTimeout(inputTimer);
}

// function checkColor() {
//   // userClick++;
  
// }
// record user input + put it in an array
function takeUserInput(e) {
  if (e.target.id === "red") {
    addRedGlow();
    userPattern.push(e.target.id);
    userClick++;
  } else if (e.target.id === "green") {
    addGreenGlow();
    userPattern.push(e.target.id);
    userClick++;
  } else if (e.target.id === "blue") {
    addBlueGlow();
    userPattern.push(e.target.id);
    userClick++;
  } else {
    addYellowGlow();
    userPattern.push(e.target.id);
    userClick++;
  }
  console.log(userPattern);
  console.log(userClick);
}
// compare user input with simon seq
function checkPatterns() {
  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] !== simonPattern[i]) {
      gameOver();
    } else {
      nextLvlCongrats();
      // clearTimeout(gameOver(), 10000);
    }
  }
}

// set the turn after showSequence (turn++);
// set timeout
// receive user input

function nextLvlCongrats() {
  promptTxt.textContent = "GREAT! ON TO THE NEXT!";
}
function gameOver() {
  promptTxt.textContent = "BUMMER!  HIT RESET TO  TRY AGAIN";
}

// button animation functions
// add glow class
function addGreenGlow(){
  greenBtn.classList.add("green-anima");
}
function addYellowGlow(){
  yellowBtn.classList.add("yellow-anima");
}
function addRedGlow(){
  redBtn.classList.add("red-anima");
}
function addBlueGlow(){
  blueBtn.classList.add("blue-anima");
}
// remove glow class
function removeGlow() {
  removeRedGlow();
  removeYellowGlow();
  removeBlueGlow();
  removeGreenGlow();
  console.log('calisti')
}
function removeGreenGlow(){
  greenBtn.classList.remove("green-anima");
}
function removeYellowGlow(){
  yellowBtn.classList.remove("yellow-anima");
}
function removeRedGlow(){
  redBtn.classList.remove("red-anima");
}
function removeBlueGlow(){
  blueBtn.classList.remove("blue-anima");
}

function resetGame() {
  removeRedGlow();
  init();
  console.log("once")
}

init();