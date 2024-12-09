"use strict";
// var is function scoped
// let and const are block scoped

// array --> collection of data

const names = ["Deepak", "Puneet", "Samay", "Hindustani", "Salman"];

// to print all array elements
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// access using index and index starts from 0

// to change

names[1] = "Puneet superstart";

// to remove last item

names.pop();

// to remove first item

names.shift();

// to insert last element

names.push("Last item");

// to insert first element

names.unshift("First item");

// to get arrays size

console.log(names.length);
