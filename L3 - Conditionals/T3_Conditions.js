/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You will CALL your functions in the console.  !!!  */
"use strict";

function t1() {
  /* Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number. */

  let value = prompt('Type a number', 0);

  if (value > 0) {
    alert( 1 );
  } else if (value < 0) {
  alert( -1 );
  } else {
    alert( 0 );
}
} //  the sign of a number

function t2() {
  /* Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” 
Please use nested if blocks. Mind the overall readability of the code.

Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null. */
let userName = prompt("Login: Username");

if (userName === 'Admin') {

  let pass = prompt("Password: ");

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
} //Check the Login

function t3() {
  /* */

} //Check Range Between

function t4a() {
  /* */

} //Check Range outside

function t4b() {
  /* */
} //Check Rang outside
