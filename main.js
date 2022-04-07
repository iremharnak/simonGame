/*----- constants -----*/
  const simonBoard = ["red", "green", "blue", "yellow"];
  const redSound = new Audio("assets/redSimon.mp3");
  const greenSound = new Audio("assets/greenSimon.mp3");
  const blueSound = new Audio("assets/blueSimon.mp3");
  const yellowSound = new Audio("assets/yellowSimon.mp3");
  const winnerSound = new Audio("assets/winner.mp3");
  const looserSound = new Audio("assets/looser.mp3");


/*----- app's state (variables) -----*/
let simonPattern = [];
let userClick = 0;
let round = 1;
let isGameOver = false;
let animationTime = 500;
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
      setTimeout(removeRedGlow,timeToTrigger + animationTime); 
    } else if (simonPattern[i]=== "green") {
      setTimeout(addGreenGlow,timeToTrigger);
      setTimeout(removeGreenGlow,timeToTrigger + animationTime);
    } else if (simonPattern[i]=== "blue") {
      setTimeout(addBlueGlow,timeToTrigger);
      setTimeout(removeBlueGlow,timeToTrigger + animationTime);
    } else {
      setTimeout(addYellowGlow, timeToTrigger);
      setTimeout(removeYellowGlow,timeToTrigger + animationTime);
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
            setTimeout(removeRedGlow,animationTime); 
            break;
      case "green":
            setTimeout(addGreenGlow,0); 
            setTimeout(removeGreenGlow,animationTime); 
            break;
      case "blue":
            setTimeout(addBlueGlow,0); 
            setTimeout(removeBlueGlow,animationTime); 
            break;
      case "yellow":
            setTimeout(addYellowGlow,0); 
            setTimeout(removeYellowGlow,animationTime); 
            // create a function that takes in a color & will do the same thing. 
        
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

// an object that bundles together 
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

// adding removing colors
// function glow() {

// }
// functions updating promptTxt
function nextLvlCongrats() {
  promptTxt.textContent = `GREAT! ON TO ROUND ${round} !`;
  userClick = 0;
  round++;
}
function gameOver() {
  promptTxt.textContent = "BUMMER!  HIT RESET TO  TRY AGAIN";
  looserSound.play();
  isGameOver = true;
}
function gameWon() {
  promptTxt.textContent = "CONGRATS! YOU WON!";
  winnerSound.play();
}

// button animation functions
// add glow class

function addGreenGlow(){
  greenBtn.classList.add("green-anima");
  greenSound.play();
}
function addYellowGlow(){
  yellowBtn.classList.add("yellow-anima");
  yellowSound.play();
}
function addRedGlow(){
  redBtn.classList.add("red-anima");
  redSound.play();
}
function addBlueGlow(){
  blueBtn.classList.add("blue-anima");
  blueSound.play();
}

// remove glow class
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
  isGameOver = false;
  init();
  console.log("once")
}

init();