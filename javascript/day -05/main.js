// functions

alert("Please verify captcha"); // to show message to user

const response = confirm("Are you above 18?"); // true/false

if (response) {
  alert("Congratulation you can vote");
} else {
  alert("You can not vote.");
}

// true
// false

/* 

if(boolean){
    // if true
}else{
    //if false
}

*/

const num1 = prompt("Enter first number");
const num2 = prompt("Enter second number");

const sum = +num1 + +num2;
// const sum = parserInt(num1) + parseInt(num2)
alert(sum);

// take two numbers from user using prompt

// ask user his name
// Salman you will be great front end developer

const name = prompt("enter your name");
alert(name + " you will be great front end developer");
