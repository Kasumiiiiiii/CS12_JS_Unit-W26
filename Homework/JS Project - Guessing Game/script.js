/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

// ELEMENTS
let guessObj = document.querySelector(".guess");
let msgObj = document.querySelector(".message");
let scoreObj = document.querySelector(".score");
let highscoreObj = document.querySelector(".highscore");
let numberObj = document.querySelector(".number");

// Helper Function
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // maximum and minimum are inclusive
  }

// ON LOAD
let randNum = getRandomIntInclusive(1, 20);
let score = 20;
let highscore = 0;

// onClick GUESS
// if incorrect
  // - hint: high/low msg
  // - score decrease points

// if correct
  // - msg: you win!
  // - score checked with highscore
  // - bg green
  // - ? box reveals number
function guess() {
    let userGuess = Number(guessObj.value);
    if (userGuess == randNum) {
        msgObj.textContent = "You Win!";
        document.body.style.backgroundColor = "green";
        numberObj.textContent = randNum;
        // check if score beats previous high score
        if (score > highscore) {
            highscore = score;
            highscoreObj.textContent = highscore;
        }
    } else if (userGuess > randNum) {
       msgObj.textContent = "Too High!";
       score--;
       scoreObj.textContent = score;
    } else {
        msgObj.textContent = "Too Low!";
        score--;
        scoreObj.textContent = score;
    }
}

document.querySelector(".check").addEventListener("click", guess);

// again button
document.querySelector(".again").addEventListener("click", 
