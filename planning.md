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


there will be a time limit for the user to put input
-at the end of this timeout user needs to input

1- show Sequence {
  showCOlor(take in a color, showing the animation- visual side)- this will run through looping through the array

}
2- validateTurn {
   settimeout(what do i need to do after the seq is delivered-showing gameover after 10sec-this will have the gameOver())
  checkPatterns(there has to be userClick and keep track & update the clicks - resets at the end of every turn 1- did user mess up? if yes trigger GameOver(), 2- did they successfully complete? cleartimeout?, cancel the bomb)
}
3- is it turn 10 {
  do they need to go another round or they need to go again?
  increment the turn value because
  i
}
## More pseudocode I wrote with the instructor:

// the computer will compare an element from what's already been generated
// you're incrementing computer's turn and it will show the next colour in the sequence
// a function to setIntervals (make red, wait one sec, show green, etc)(done)


// variable indicating who's turn it is to see if user is done and another variable how many times the user clicked so far in this round (if x amount of clicks done user can't click) another one for round (round one user's allowed to click once, round 5 user is allowed 5 clicks)

## What i have working:
// 1st generate seq (all the moves the computer will do) (done)
// 2nd how can i have the computer show 1, (turn logic) (done)
// 3rd user can click and collect userPatterns
## What i have written but didn't wrap together:
// remove animation classes
// resetAll (reset btn)
// checkPatterns (compare userPattern[i] & simonPattern[i])
