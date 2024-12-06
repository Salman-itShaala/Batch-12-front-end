// for (let i = 1; i <= 20; i++) {
//   console.log("Hello there");
// }

//

/*

intitalisation;

do{
    // task to perforom

    // updation
}while(condition)

*/

let i = 11;

while (i < 10) {
  console.log("Hello there from while loop");
  i++;
}

// yes
// no
// aana toh nhi chahiye lekin aa jata hai
// 1 baar

let j = 11;

do {
  console.log("Hello thre from do while loop");
  j++;
} while (j < 10);

// yes
// no
// aana toh nhi chahiye lekin aa jata hai
// 1 baar

// print all odd numbers from 1 to 50 using while loop

// let k = 1;

// while (k <= 50) {
//   if (k % 2 !== 0) {
//     console.log(k);
//   }
//   k++;
// }

// print all multiples of 3 from 1 to 50 using any loop

// loop from 1 to 100
// FizzBuzz
// if number is divisible by 3 --> Fizz
// if number is divisible by 5 --> Buzz
// if number is divisible by both --> FizzBuzz

alert("Hii therer");

for (let i = 1; i <= 50; i++) {
  if (i % 15 === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  }
}
