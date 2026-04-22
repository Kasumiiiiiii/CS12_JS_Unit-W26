/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  /*Exercise #1: Construct for loops that accomplish the following tasks:*/
  //a. Print the numbers 0 - 20, one number per line.
  for (let i = 0; i <= 20; i++) {
    console.log("Ex1:", i)
  }
  //b. Print only the ODD values from 3 - 29, one number per line.
  for (let i = 3; i <= 29; i += 2) {
    console.log("Ex2:", i)
  }
  //c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
  for (let i = 12; i >= -14; i -=2) {
    console.log("Ex3:", i)
  }
  //d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3.
  let start = 50;
  let end = 20;
  for (let i = start; i >= end; i--) {
    if (i % 3 === 0) {
      console.log("Ex4:", i);
    }
  }
  //** (Your code should work even if you replace 50 or 20 with other numbers).
}

function t2() {
  /*Exercise #2:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  let originalArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

  let evens = [];
  let odds = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 === 0) {
      evens.push(originalArray[i]);
    } else {
      odds.push(originalArray[i]);
    }
  }

  console.log("Evens:", evens);
  console.log("Odds:", odds);
  // console.log(`Even: ${evens} and Odd: ${odds}`);
}
