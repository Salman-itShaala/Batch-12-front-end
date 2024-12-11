// using id

const selectedH1 = document.getElementById("my-h1");

console.log("selected h1 is ", selectedH1);

// using class --> return HTMLCollection ie. array

const paraCollection = document.getElementsByClassName("my-para");

console.log(paraCollection[1]);

// using tag -->  return HTMLCollection ie. array

const liTagCollection = document.getElementsByTagName("li");
console.log(liTagCollection[0]);

// using querySelector

// i)

const firstLi = document.querySelector("li");
console.log(firstLi);

// ii)
const allLi = document.querySelectorAll(".my-para");
console.log(allLi[1]);
