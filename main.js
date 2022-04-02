/*----- constants -----*/
  const simonBoard = ["red", "green", "blue", "yellow"];

/*----- app's state (variables) -----*/
// simonPattern will hold all the sequences randomly generated with init
let simonPattern = [];

let userClick = 0;
let round = 1;
let isGameOver = false;
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
  promptTxt.textContent = "LET'S PLAY";
  simonPattern = [];
  userClick = 0;
  round = 1;
  generateSimon();
}
// generate simon seq (all the moves the computer will do) 
function generateSimon() {
  for (let i = 0; i < 10; i++) {
    let randomNumber = getRandomNumber();
     simonPattern.push(simonBoard[randomNumber]);
  }
  console.log(simonPattern)
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

// start showing sequence, this function is first run inside startGame click function. As the round is incremented, it will show more of the simonSequence
function showSequence() {
for (let i = 0; i < round; i++) {
    let timeToTrigger = i * 1000;
    if (simonPattern[i]=== "red") {
      setTimeout(addRedGlow,timeToTrigger); 
      setTimeout(removeRedGlow,timeToTrigger + 500); 
    } else if (simonPattern[i]=== "green") {
      setTimeout(addGreenGlow,timeToTrigger);
      setTimeout(removeGreenGlow,timeToTrigger + 500);
    } else if (simonPattern[i]=== "blue") {
      setTimeout(addBlueGlow,timeToTrigger);
      setTimeout(removeBlueGlow,timeToTrigger + 500);
    } else {
      setTimeout(addYellowGlow, timeToTrigger);
      setTimeout(removeYellowGlow,timeToTrigger + 500);
    }
  }
}


// take user input and compare it to simonPattern as we go along, if the input is wrong, game over, if correct, we move to the next round

function takeUserInput(e) {
  
  if  (e.target.id !== simonPattern[userClick]) {
    gameOver();
    console.log("hello, game over");
    return;
  }
    switch (e.target.id) {
      case "red":
            setTimeout(addRedGlow,0); 
            setTimeout(removeRedGlow,500); 
            break;
      case "green":
            setTimeout(addGreenGlow,0); 
            setTimeout(removeGreenGlow,500); 
            break;
      case "blue":
            setTimeout(addBlueGlow,0); 
            setTimeout(removeBlueGlow,500); 
            break;
      case "yellow":
            setTimeout(addYellowGlow,0); 
            setTimeout(removeYellowGlow,500); 
            break;
    }
  
  if (shouldStartNewRound()){
  nextLvlCongrats();
  if (!winner()) {
  setTimeout(showSequence,3000);
  }
} else {
  userClick++;
} 
}

// If it's not gameOver and the last userClick is round -1, this way we wait for userClicks to be complete 
function shouldStartNewRound() {
  // the last userClick turn for the round is the roundNumber - 1
  return !isGameOver && userClick === round - 1;
}


// check if user finished the game or not - max turn is 10
function winner() {
  if (round >= simonPattern.length + 1) {
    gameWon();
    return true;
  }
}

// functions updating promptTxt
function nextLvlCongrats() {
  promptTxt.textContent = `GREAT! ON TO ROUND ${round} !`;
  userClick = 0;
  round++;
}
function gameOver() {
  promptTxt.textContent = "BUMMER!  HIT RESET TO  TRY AGAIN";
  isGameOver = true;
}
function gameWon() {
  promptTxt.textContent = "CONGRATS! YOU WON!";
}

// button animation functions
// add glow class

function addGreenGlow(){
  greenBtn.classList.add("green-anima");
  // console.log('add green');
}
function addYellowGlow(){
  yellowBtn.classList.add("yellow-anima");
  // console.log('add yellow');
}
function addRedGlow(){
  redBtn.classList.add("red-anima");
  // console.log('add red');
}
function addBlueGlow(){
  blueBtn.classList.add("blue-anima");
  // console.log('add blue');
}

// remove glow class
function removeGreenGlow(){
  greenBtn.classList.remove("green-anima");
  // console.log('remove green');
}
function removeYellowGlow(){
  yellowBtn.classList.remove("yellow-anima");
  // console.log('remove yellow');
}
function removeRedGlow(){
  redBtn.classList.remove("red-anima");
  // console.log('remove red');
}
function removeBlueGlow(){
  blueBtn.classList.remove("blue-anima");
  // console.log('remove blue');
}

// reset the game
function resetGame() {
  isGameOver = false;
  init();
  console.log("once")
}

init();