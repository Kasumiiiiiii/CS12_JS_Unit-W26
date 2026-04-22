/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You will CALL your functions in the console.  !!!  */

function ex() {
  /* Create a script that will PROMPT the user for two numbers
   Then it will add them together and place it in the console.   */
  let num1 = prompt("What is your first number?");
  let num2 = prompt("What is your second number?");
  let result = num1 + num2;
  console.log(result);
  // Run your function by typing ex() in the console //
  // You can use the ex() function as the start of your solution to q1() //
} //Example Script

function q1() {
  /* Create a program that will prompt the user to enter 2 numbers. 
        In the console: Your program  will then display these 2 numbers 
        and the sum of these 2 numbers.*/
        let num1 = Number(prompt("What is your first number?"));
        let num2 = Number(prompt("What is your second number?"));
        let sum = num1 + num2;
        console.log(Number(sum));
      } //Sum of Two
      
      function q2() {
        /* Write a program that will prompt the user to input their first name, 
              last name and year they were born. 
              In the console: The program will then print the person’s full name and their age.*/
              let firstName = prompt("What is your first name? ");
              let lastName = prompt("What is your last name? ");
              let birthYear = Number(prompt("What year were you born? "));

              let currentYear = 2026
              let age = currentYear - birthYear;

              console.log(`Hello ${firstName} ${lastName}, you are ${age} years old.`);
      } //Name and Age
      
      function q3() {  /* Create a program that will prompt a user to enter the radius of a circle. 
        In the console: Your program will then display the circumference of that circle and it’s area.*/
          const PI = 3.14159265358;

          let radius = Number(prompt("What is the radius? "))
          let circumference = 2 * PI * radius
          let area = PI * radius * radius

          console.log(`The circumference is ${circumference} and the area is ${area}.`);
} //Circle Circumference and Area

function q4() {
  /* Create a program for calculating price of a food order. 
        User should enter number of fries orders and drinks. 
        In the console: Program will show food ordered and total cost, including tax.*/
        const friesPrice = 4.00;
        const drinkPrice = 1.00;
        const taxRate = 0.15;

        let fries = Number(prompt("How many $4.00 fries do you want? "));
        let drinks = Number(prompt("How many $1.00 pops do you want? "));

        let friesTotalP = friesPrice * fries;
        let drinkTotalP = drinkPrice * drinks

        let subtotal =  friesTotalP + drinkTotalP;
        let tax = subtotal * taxRate;
        let total = subtotal + tax;

        console.log(`Order: ${fries} fries and ${drinks} pop.`)
        console.log(`Subtotal: ${friesTotalP} + ${drinkTotalP} = ${subtotal}`)
        console.log(`Total: ${subtotal} + tax = ${total}`)
} //Food Order

function q5() {
  /* Create a program that will calculate the average of  3 jump lengths of a long-jump athlete.*/
} //Average Jump

function q6() {
  /* Create a temperature conversion program to convert temperatures in Celsius to Farenheit.  */
} //Temperature Conversion

function q7() {
  /* Pythagorean theorem states that  a2 + b2 = c2. Create a program that asks for lengths of sides a and b, and then displays the length of the hypotenuse, side c. */
} //Pythagorean Theorem

function q8() {
  /* Create a change program that will display the minimum number of coins necessary to make the change entered by the user. Change can be made up of quarters, dimes, nickels and pennies*
   *Hint - you may want to consider using special division operators // and %
   **Extension- Can this be modified to reflect that we no longer use pennies?*/
} //Coin Change Calculator
