/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

/* 
Function: number_generator
	In: n - how many numbers to generate,    L - lowest number ,  H - highest number
	Do:  Randomly generate n numbers in the range L to H that are all unique. Return sorted list.
	Out: sorted unique number list
Random number generation → Link to Random Number in JS
Function Notation -> Link to Functions in JS
Using ARRAY  to keep track of list. Checking if an item is already in a list. 
Return (part of function notation)
*/
function getRandomIntInclusive(min, max) {  
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function number_generator() {
  /* */
  let n = Number(prompt("How many numbers to generate?"));
  let L = Number(prompt("What is the lowest number?"));
  let H = Number(prompt("What is the highest number?"));

  let randNum = 0;
  let numArr = []; //INITIAL (array is empty)
  while (numArr.length < n) { //CHECK (if my array length is less than 1)
	randNum = getRandomIntInclusive(L, H);
	if (!numArr.includes(randNum)) {
		numArr.push(randNum); // DO (generate random number, check if unique)
	}
  }

  return numArr.sort()
//   numArr.sort(function(a, b) {
// 	return a - b;
//   });

//   return numArr;
} // number_generator