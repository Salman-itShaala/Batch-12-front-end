"use strict";

// add7
function add7(number) {
  console.log("add the no", number + 7);
}
add7(7);

// Write a function that takes an integer minutes and converts it to seconds.

function convertToSec(minutes) {
  console.log(minutes * 60);
}

convertToSec(2);

// Write a function that takes the base and height of a triangle and return its area.

function calculateAreaofTriangle(base, height) {
  const areaOfTriangle = 0.5 * base * height;
  return areaOfTriangle;
}

console.log(calculateAreaofTriangle(10, 5));

// Create a function that takes length and width and finds the perimeter of a rectangle.

function calculatePerimeterOfRectangle(length, breadth) {
  const perimeter = 2 * (length + breadth);
  console.log(perimeter);
}

calculatePerimeterOfRectangle(10, 20);

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function isLessThan100(num1, num2) {
  return num1 + num2 <= 100;
}

console.log(isLessThan100(50, 51));
