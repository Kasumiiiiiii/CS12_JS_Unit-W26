//CONSTANTS
let maxSize = 400;
let minSize = 90;

//VARIABLES
let size = 200;

//FUNCTIONS
function inflate() {
  //increase size/height by 10%
  size *= 1.1;
  document.querySelector(".imgBalloon").style.height = String(size) +"px";
  //if size exceeds a maximum, 
  if (size > maxSize) {
    //change to popped balloon
    document.querySelector(".imgBalloon").src = "popped_balloon.png"
    
    
    //remove the ability for the user to inflate or deflate a popped balloon.
    document.querySelector(".btnInflate").removeEventListener("click", inflate);
    document.querySelector(".btnDeflate").removeEventListener("click", deflate);
  }  
}

function deflate() {
  //decrease size/height by 10%
  size *= 0.9
  document.querySelector(".imgBalloon").style.height = String(size) +"px";
  //do not decrease the size below the minimum
  if (size < minSize) {
    size = minSize;
    document.querySelector(".imgBalloon").style.height = String(size) +"px";
  }
}

function newBalloon() {
  //change any popped balloon back to blue balloon
  document.querySelector(".imgBalloon").src = "blue_balloon.png";
  //return balloon back to default/initial size
  size = 200
  document.querySelector(".imgBalloon").style.height = String(size) +"px";
  //restore event listeners
  document.querySelector(".btnInflate").addEventListener("click", inflate);
  document.querySelector(".btnDeflate").addEventListener("click", deflate);
}


//INITIAL EVENT LISTENERS
document.querySelector(".btnInflate").addEventListener('click', inflate);
document.querySelector(".btnDeflate").addEventListener('click', deflate);
document.querySelector(".btnReset").addEventListener('click', newBalloon);
