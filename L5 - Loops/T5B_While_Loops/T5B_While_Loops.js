/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  //Define three variables for the a SpaceShip shuttle
  //- one for the starting fuel level,
  // another for the number of astronauts aboard,
  //and the third for the altitude the shuttle reaches.

  /*Exercise 1: Construct while loops to do the following:
  //a. Query the user for the starting fuel level. VALIDATE that the user enters a positive, integer value greater than 5000 but less than or equal 30000. */
  let fuel = Number(prompt("Starting Fuel Level: ")); // INITIAL
  while (fuel < 5000 || fuel > 30000 || isNaN(fuel)) { // CHECK
    alert("Fuel must be between 5000 and 30000."); // DO STUFF
    fuel = Number(prompt("Starting Fuel Level: ")); // CHANGE
  }
  //b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). VALIDATE the entry.
  let numAstro = Number(prompt("Number of Astronauts: "));
  while (numAstro > 7 || numAstro < 1 || isNaN(numAstro)) {
      alert("Number of astronauts must be between 1 and 7.")
      numAstro = Number(prompt("Number of Astronauts: "))
  }

  //c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
  // Output the resulting altitude with dsthe phrase, “The shuttle gained an altitude of ___ km.”
  // If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
  let altitude = 0;
  while (fuel - (100 * numAstro) >= 0) {
    fuel -= (100 * numAstro);
    altitude += 50;
    console.log(`Fuel remaining: ${fuel} | Altitude: ${altitude} km`);
  }
  
  let result = `The shuttle gained an altitude of ${altitude} km. `;

  if (altitude >= 2000) {
    result += "Orbit achieved!";
  } else {
    result += "Failed to reach orbit.";
  }

  console.log(result);
}
