// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// 3 -> 1 + 2 + 3 => 6
// 5 --> 1 + 2 + 3 + 4 + 5 => 15

function addAllNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
}

function addAllNumbersOptimised(num) {
  let sum = (num * (num + 1)) / 2;
  console.log(sum);
}

// write a function which will take an numbers array as input and will return sum of it's elements

// [1,2,3,8,9] -> 1 + 2 + 3 + 8 + 9 =>

function sumOfArray(arr) {}

// Write a function that returns the factorial of a given number

// Write a function that checks if a number is prime or not.
