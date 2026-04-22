/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  /*  */
  let style = ["Jazz", "Blues"];
  console.log(`Step 1: ${style}`);

  style.push("Rock-n-Roll");
  console.log(`Step 2: ${style}`);

  // find middle
  let middleIndex = (style.length - 1) / 2;
  style[middleIndex] = "Classics";
  console.log(`Step 3: ${style}`);

  let firstItem = style.shift();
  console.log(`Step 4: (first ${firstItem}) ${style}`);

  style.unshift("Rap", "Reggae");
  console.log(`Step 5: ${style}`);

} //  5 array operations

function t2() {
  /* */
  let string = "water,space suits,food,plasma sword,batteries";
  let array = string.split(",");
  array.sort()
  let sortedString = array.join(",");
  console.log(sortedString)

} // Using split and join
