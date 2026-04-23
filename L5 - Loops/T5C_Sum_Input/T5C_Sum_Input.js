/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  // Asks the user for values using prompt and stores the values in the array.

  let numbers = []; // MAKE EMPTY ARRAY
  let userNum = prompt("Enter the first number:"); // INITIAL - users first number
  while (userNum !== "") { // CHECK - for not empty string
    numbers.push(Number(userNum)); // DO SOMETHING -  add imput to array
    userNum = prompt("Enter the next number (leave it empty to stop):"); // CHANGE - get user's next number
  }
  console.log(numbers); // DEBUG - print finished array to console

  // Finishes asking when the user enters an empty string.
  // Calculates and returns the sum of array items.
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log(`The sum is: ${sum}.`)
  // P.S. A zero 0 is a valid number, please don’t stop the input on zero.
} //  sum of user input
