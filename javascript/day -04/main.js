// ternary operator
//  cond ? if true : if false;

10 > 12
  ? console.log("Given condition is true")
  : console.log("Given condition is false");

/*
if(condition){
    if condition is true
}else{
    if condition is false
}
*/

if (22 > 12) {
  console.log("Given condition is true........ from if else");
} else {
  console.log("Given condition is false.......from if else");
}

//
const age = 17;
const gender = "female";
// check if person is allowed marry or not
// male age -> 21
// female age -> 18

if (gender === "male" && age >= 21) {
  console.log("This male can marry");
} else if (gender === "female" && age >= 18) {
  console.log("This female can marry");
} else {
  console.log("this person can not marry");
}

// if else if
/*
if(condition1){
 if condition1 is true
}else if(condition2){
    if condition 2 is true
}else{
    if both conditions are false
}
*/

const day = 6;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Kab ayega sunday");
    break;
  default:
    console.log("Invalid Input");
}

const role = "hacker"; // student

switch (role) {
  case "admin":
    console.log("You can upload course");
    break;
  case "student":
    console.log("You can access the course");
    break;
  default:
    console.log("Access blocked");
}

if (role === "admin") {
  console.log("You can upload course");
} else if (role === "student") {
  console.log("You can access the course");
} else {
  console.log("Access blocked");
}

// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesday");
// } else if (day === 4) {
//   console.log("Thursday");
// } else if (day === 5) {
//   console.log("Friday");
// } else if (day === 6) {
//   console.log("Saturday");
// } else if (day === 7) {
//   console.log("Sunday");
// } else {
//   console.log("Invalid input");
// }

// day = 1 -> print "Monday"
// day = 2 -> print "Tuesday"
// day = 3 -> print "Wednesday"
// day = 4 -> print "Thursday"
// day = 5 -> print "Friday"
// day = 6 -> print "Saturday"
// day = 7 -> print "Sunday"
