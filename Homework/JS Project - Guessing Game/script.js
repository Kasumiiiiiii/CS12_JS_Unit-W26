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
let checkBtn = document.querySelector(".check");

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
        document.body.style.backgroundColor = "#39c039";
        numberObj.textContent = randNum;
        checkBtn.disabled = true;

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

    // extension
        let diff = Math.abs(randNum - userGuess);
        if (diff >= 19) {
          document.body.style.backgroundColor = "#0f100f";
      } else if (diff >= 17) {
          document.body.style.backgroundColor = "#141814";
      } else if (diff >= 15) {
          document.body.style.backgroundColor = "#181f18";
      } else if (diff >= 13) {
          document.body.style.backgroundColor = "#1b251b";
      } else if (diff >= 11) {
          document.body.style.backgroundColor = "#1e2c1e";
      } else if (diff >= 9) {
          document.body.style.backgroundColor = "#203320";
      } else if (diff >= 7) {
          document.body.style.backgroundColor = "#223b22";
      } else if (diff >= 5) {
          document.body.style.backgroundColor = "#244424";
      } else if (diff >= 3) {
          document.body.style.backgroundColor = "#264e26";
      } else if (diff >= 1) {
          document.body.style.backgroundColor = "#285a28";
      } else {
          document.body.style.backgroundColor = "#39c039";
      }
  }

document.querySelector(".check").addEventListener("click", guess);

// again button
function again() {
  alert ("Start Over!");

  //recalculate randNum
  randNum = getRandomIntInclusive(1, 20);
  console.log("New Secret Number:", randNum);

  //background back to black
  document.body.style.backgroundColor = "black";

  //change number box to ?
  numberObj.textContent = "?";

  //change score variable to 20, score message to score
  score = 20;
  scoreObj.textContent = score;

  //message "start guessing"
  msgObj.textContent = "Start guessing...";

  //change guess box back to 0
  guessObj.value = "";

  checkBtn.disabled = false;
}

document.querySelector(".again").addEventListener("click", again);
