/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You will CALL your functions in the prompt.  !!!  */

function q1() {
  /* Create a grading program that prompts a student to enter their grade on an assignment. Depending on the grade, the console should display a message according to the grade boundaries.*/
  let grade = Number(prompt("Enter your grade:"));

  if (grade < 60) {
    alert("Faill!");
  } else if (grade >= 60 && grade <= 69) {
    alert("Pass!");
  } else if (grade >= 70 && grade <= 79) {
    alert("Well Done!");
  } else if (grade >= 80 && grade <= 89) {
    alert("Great Work!");
  } else if (grade >= 90 && grade <= 100) {
    alert("Excellent!");
  } else {alert("incorrect grade");
  }
} // Grade_Boundaries

function q2() {
  /* There have been some safety recalls on a number of cars at your dealership. Cars with model numbers 119, 179, 189 through 203, and 235-252 are all found to be defective. Create a program to enable the user to check the model number. Prompt for model number, print “Recalled” or “Not recalled”.*/
  let carNum = Number(prompt("Enter the car model number:"));
  if (carNum == 119 || carNum == 179 || carNum >= 189 && carNum <= 203 || carNum >= 235 && carNum <= 252) {
    alert("Recalled");
  } else {
    alert("Not recalled");
  }
} //Recall_Number

function q3() {
  /* Create a wages program for your employees to calculate weekly pay.
Prompt for the employee name, rate of pay, and number of hours.
If the employee works more than 40 hours, they will be paid an overtime rate of 1.5 x normal hourly rate for any hours over 40.  Print the total pay in a nice sentence.*/
   let name = prompt("Enter your name:");
   let rate = Number(prompt("Enter the rate of pay:"));
   let hour = Number(prompt("Enter the number of hours you worked:"));

   if (hour <= 40) {
    pay = rate * hour;
   } else if (hour > 40) {
    pay = (rate * 40) + (rate * 1.5 * (hour - 40));
   }

   alert(`Total pay for ${name} is $${pay}.`);
} //Weekly_Pay
