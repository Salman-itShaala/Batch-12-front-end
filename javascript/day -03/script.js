// Operators
// operators will perform some operations

// = (assignment operator)

const userName = "Salman";

// Arithmatic operators
// +, -, *, /, % (modulo)

const num1 = 10;

const num2 = 40;

const sum = num1 + num2; // 50

const substraction = num1 - num2; // 30

const multiplication = num1 * num2; // 400

const division = 10 / 3; //  3.3333333335

const remainder = 10 % 3; // 1

// exponential operator

console.log(3 ** 3);
// 2 ^ 53

console.log(sum);

console.log(substraction);

console.log(division);

console.log(remainder);

// Comparison operator
// returns boolean value

// grater than (>)
console.log(10 > 20); // false
console.log(100 > 20); // true

// less than
console.log(11 < 10); // false
console.log(11 < 12); // true

// greate than or equal to (>=)

console.log(10 >= 10); // true
console.log(100 >= 10); // true

// less than or eqaul to ( <= )

console.log(10 <= 100); // true
console.log(100 <= 10); // false
console.log(10 <= 10); // true

// Logical operators

// && (AND)

console.log(true && true); // true

// || (OR)
console.log(false || false); // false

// ! (NOT)
console.log(!true); // false
console.log(!false); // true

// short circuit operators

// & , | , ~

// absent student -> Sakshi, Mahek, Aditi

// Equality operators

// 1. double equal to operator

console.log(10 == 10); // true
console.log(11 == 10); // false

// 2. not equal to operator

console.log(10 != 10); // false
console.log(11 != 10); // true

console.log("ten" == 10); // false

console.log(1 == "one"); // false

console.log(10 == "10"); // true
console.log("10" == 10); // true

// triple equal to operator / strict equality
// --> strict equality operator will check data as well
// as data type of given operands

console.log(10 === "10"); // false

console.log(10 !== "11"); // true

// increment(++) and decrement(--) operator

let num = 10;

num++;

console.log(++num); // 11
console.log(num); // 11

// Ternary operator
// condition ? if true : if false

10 > 10
  ? console.log("Yes---- 10 is greater than ...")
  : console.log("No 10 is not greater than...");

// compund assignment operators

let number = 30;

// number = number + 10;
number += 10;

// bitwise operators
