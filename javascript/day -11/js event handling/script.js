// user can perform some actions on your website --> events
// and we can listen to those events and then we can write
// function (event handlers) to handle those events

document.addEventListener("scroll", () => {
  console.log("you are scrolling", Math.random());
});

window.addEventListener("load", () => {
  console.log("Window loaded");
});

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});

window.addEventListener("keydown", (event) => {
  console.log(event.key);
});

document.addEventListener("mousedown", (event) => {
  console.log(event);
  if (event.button === 1) {
    console.log("You clicked left mouse btn");
  } else {
    console.log("You clicked right mouse btn");
  }
});
