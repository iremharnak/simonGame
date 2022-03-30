/*----- constants -----*/
  const simonBoard = ["red", "green", "blue", "yellow"];

/*----- app's state (variables) -----*/
// simonPattern will hold all the sequences randomly generated with init
let simonPattern = [];
let userPattern = [];
let userClick = 0;
let round = 1;
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
  round = 1;
  generateSimon();
  
}
// 1st generate simon seq (all the moves the computer will do) 
function generateSimon() {
  for (let i = 0; i < 10; i++) {
    let randomNumber = getRandomNumber();
     simonPattern.push(simonBoard[randomNumber]);
  }
  console.log(simonPattern); 
  return simonPattern;
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
for (let i = 0; i < 6; i++) {
  removeGlow();
    console.log(simonPattern[i])
    // let timeToTrigger = i * 1000;
    // console.log(timeToTrigger)
    if (simonPattern[i]=== "red") {
      // 0
      // setTimeout(addRedGlow,timeToTrigger); 
      setTimeout(addRedGlow, 0); 
      
    } else if (simonPattern[i]=== "green") {
      // 1
      // setTimeout(addGreenGlow,timeToTrigger);
      setTimeout(addGreenGlow,500);

    } else if (simonPattern[i]=== "blue") {
      // 2
      // setTimeout(addBlueGlow, timeToTrigger);
      setTimeout(addBlueGlow, 1000);
      // setTimeout(removeBlueGlow,2500); 
    } else {
      // 3
      // setTimeout(addYellowGlow,timeToTrigger);
      setTimeout(addYellowGlow,1500);
      // setTimeout(removeYellowGlow,3500);
    }
  }
  // removeGlow();
  console.log(round);
}


// set 10sec timeout to wait for userInput, once input is given check it, if correct move to the next round by round++ & cleartimeout
// function validateTurn() {
//   round++;
//   console.log(round);
//   // once the sequence's delivered wait for input, if nothing for 10sec -> gameOver
//   let inputTimer = setTimeout(gameOver, 10000);
//   // 1st check if it's correct pattern, if yes increment
//   // checkPatterns();
//   // takeUserInput(e);
  
//   console.log('it is working');
// }


// record user input + put it in userPattern array & increment userClicks
function takeUserInput(e) {
  removeGlow();
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
  // checkPatterns();
  // whatever you want to use from here take it as a variable and put it in validateTurn
}

// compare user input with simon sequence, if they don't match -> gameOver(), if they do -> nextLvlCongrats() + increment turn, reset userClick
function checkPatterns() {
  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] !== simonPattern[i]) {
      gameOver();
      userClick = 0;
    } else {
      nextLvlCongrats();
      userClick = 0;
      console.log(userClick);
      round++;
      console.log(round);
    }
  }
  removeGlow();
}

// check if user finished the game or not - max turn is 10
function checkWinner() {
  if (userPattern.length >= simonPattern.length) {
    // you need another variable like maxTurn
    // or >= simonPatterns.length
    gameWon();
    return true;
  }
}

// functions updating promptTxt
function nextLvlCongrats() {
  promptTxt.textContent = "GREAT! ON TO THE NEXT!";
}
function gameOver() {
  promptTxt.textContent = "BUMMER!  HIT RESET TO  TRY AGAIN";
}
function gameWon() {
  promptTxt.textContent = "CONGRATS! YOU WON!";
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
  console.log('removing class')
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

// reset the game
function resetGame() {
  removeGlow();
  init();
  console.log("once")
}

init();