// Data types in javascript

//  there are 8 data-types in js

// 1. number

const age = 45;

const height = 5.5;

// typeof is an operator which gives data type of given data

console.log("type of height ie. 5.5 is", typeof height); // number
console.log("type of age ie. 45 is", typeof age); // number

// 2. bigint

const num = 9876543210987612;

console.log("type of 9876543210987612n is ", typeof num);

// 3. boolean

const isValid = true;

const isAllowed = false;

console.log(typeof isAllowed);

// 4. string

// double quotes
const userName = "Punit superstart";

// single quotes
const city = "pune";
const address = "pune";

console.log(city);

// backticks (ES6)
const sentence = `My name is ${userName} and I live in ${city}`;

console.log(sentence);

// 5. undefined

let lastName;

// undefined is value as well as data type
console.log(typeof lastName);

// 6. null

// typeof null is object -> this is bug in javascript
let birthDate = null;
console.log(typeof birthDate); // object

// 7. object

// in object we can store data in key value pairs

const person = {
  fname: "Deepak",
};

// everything in js is object
console.log(typeof person); // object

// 8. Symbol
// unique value

const unique1 = Symbol("unique value");
const unique2 = Symbol("unique value");

console.log(typeof unique1);
