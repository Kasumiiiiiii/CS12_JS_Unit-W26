/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can CALL your functions in the console.  !!!  */

function q1() {
  /* */
  let names = [];
  for (let i = 0; i < 5; i++) {
    let name = prompt("Enter Student Name " + (i + 1) + ":");
    names.push(name);
  }

  let sortNames = names.sort();

  let result = "Names: " + sortNames.join(", ");

  alert(result);

  return sortNames;
} // Get_Five
//console.log( q1 () )

function q2(marksArr) {
  /* */
  let total = 0

  for (let i = 0; i < marksArr.length; i++) {
    total += marksArr[i];
  }

  let avg = total / marksArr.length;

  let result = "Average mark: " + avg;
  alert(result);

  return avg;
} //Average_mark
//console.log( q2(  [80, 85, 87, 86, 88, 90]  )   )

function q3(tempArr, goal) {
  /* */
  let dayNum = 0
  let output = "Day --> Temperature\n";

  for (let i = 0; i < tempArr.length; i++) {
    let day = i + 1;
    let temp = tempArr[i];
    output += day + " --> " + temp + "\n";
    if (temp >= goal) {
      dayNum = day;
      break;
    }
  }
  alert(output);

  return dayNum;
} //Warm_Temps
// console.log(q3([13, 15, 13, 18, 20, 18, 22], 20)); // returns 5
