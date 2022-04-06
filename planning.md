1st pseudocode I wrote:

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

<!-- more features to think about -->
  // + add more special features to test your ability to continue with more advance logic, what happens if we want to add a color? User wanting to put their own color? Quick mode? Slow etc. A sequence that doesn't build on, on/off switch, scoring system for each option (high score system, ability to type in your name, scoreboard)

## My game logic:

Shelved this idea-> (there will be a 10sec time limit for the user to put input)


1- showSequence() {
  2nd how can i have the computer show 1, (turn logic)
  Function triggered by startGame() click function
 (take in a color, show the animation- visual side)- this will run through looping through the array
}
2- validateTurn {
  turn++;
  setTimeout (waiting for user input)
  
   settimeout(what do i need to do after the seq is delivered-showing gameover after 10sec-this will have the gameOver())
  checkPatterns(there has to be userClick and keep track & update the clicks - resets at the end of every turn 1- did user mess up? if yes trigger GameOver(), 2- did they successfully complete? cleartimeout, cancel the bomb)
}
3- winner() {
  do they need to go another round or is it done?
}


which one comes first?
// set the turn after showSequence (turn++);
// set timeout
// receive user input

## More pseudocode I wrote with the instructor:

// the computer will compare an element from what's already been generated
// you're incrementing computer's turn and it will show the next colour in the sequence
// a function to setIntervals (make red, wait one sec, show green, etc)(done)


// variable indicating who's turn it is to see if user is done and another variable how many times the user clicked so far in this round (if x amount of clicks done user can't click) another one for round (round one user's allowed to click once, round 5 user is allowed 5 clicks)

## What i have working:
//generate seq (all the moves the computer will do) (done)
// how can i have the computer show 1 (or more) (turn logic) (done)
//  user can click and collect userPatterns
// resetBtn
// removing classLists functions are working on their own (where to place them?)
## What i have written but didn't wrap together:
// remove animation classes
// resetAll (reset btn)
// checkPatterns (compare userPattern[i] & simonPattern[i])
// validateTurn()
// isTurn10()
// nextLvlCongrats()
// gameWon()
// gameOver()
## What's missing:
// after which function to remove the classLists?

## Once game logic works what's next:
// music

leftover comments etc
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

<!-- record user input + put it in userPattern array & increment userClicks
 -->
 <!-- function takeUserInput(e) {
  if (e.target.id === "red") {
    setTimeout(addRedGlow,0); 
    setTimeout(removeRedGlow,500); 
    userPattern.push(e.target.id);
    if  (e.target.id !== simonPattern[userClick]) {
      gameOver();
    };
    // use switch instead of if else 
    // userClick++; write this at the end
  } else if (e.target.id === "green") {
    setTimeout(addGreenGlow,0); 
    setTimeout(removeGreenGlow,500); 
    userPattern.push(e.target.id);
    userClick++;
  } else if (e.target.id === "blue") {
    setTimeout(addBlueGlow,0); 
    setTimeout(removeBlueGlow,500); 
    userPattern.push(e.target.id);
    userClick++;
  } else {
    setTimeout(addYellowGlow,0); 
    setTimeout(removeYellowGlow,500); 
    userPattern.push(e.target.id);
    userClick++;
  }
  if (userPattern.length === round) {
    console.log("User pattern is:", userPattern);
    console.log("User pattern length is:", userPattern.length);
    console.log("Round is:", round);
    checkPatterns();
    } 
} -->
// Another way of dealing with userClicks
// user clicks, we take the color & compare to the 1st element of simonPattern, if wrong -> gameOver, if correct, trigger next animation & update userClick & check with the next simonPattern index/color

// function takeUserInput(e) {
//   if (e.target.id === "red") {
//     setTimeout(addRedGlow,0); 
//     setTimeout(removeRedGlow,1000); 
//     console.log("I clicked red");
//   } else if (e.target.id === "green") {
//     setTimeout(addGreenGlow,0); 
//     setTimeout(removeGreenGlow,1000); 
//     console.log("I clicked green");
//   } else if (e.target.id === "blue") {
//     setTimeout(addBlueGlow,0); 
//     setTimeout(removeBlueGlow,1000); 
//     console.log("I clicked blue");
//   } else {
//     setTimeout(addYellowGlow,0); 
//     setTimeout(removeYellowGlow,1000); 
//     console.log("I clicked yellow");
//   }
//  for (let i = 0; i < round; i++) {
//    if (e.target.id === simonPattern[i]) {
//      console.log("right move");
//      userClick++;
//      console.log(userClick)
//    } else {
//      console.log("wrong move");
//    }
//  }
// }

# leftover code
let userPattern = [];
// 4- compare user input with simon sequence, if they don't match -> gameOver(), if they do -> nextLvlCongrats() + increment turn, reset userClick
// function checkPatterns() {
//   for (let i = 0; i < userPattern.length; i++) {
//     if (userPattern[i] !== simonPattern[i]) {
//       gameOver();
//       // userClick = 0;
//       userPattern = [];
//    }
//     nextLvlCongrats();
//     userPattern = [];
//     userClick = 0;
//     round++;
//     setTimeout(showSequence,3000);
//   }
// }
// another variation of checkPatterns
// function checkPatterns(){
//   for (let i = 0; i < userPattern.length; i++) {
//     if (userPattern[i] !== simonPattern[i]) {
//       return false;
//     }
//   }
//   return true;
// }