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

## My game logic:



Shelved this idea-> (there will be a 10sec time limit for the user to put input)


1- showSequence() {
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
