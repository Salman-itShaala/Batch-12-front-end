// step 1
const myDiv = document.querySelector(".my-div");

// step 2 : add Event listener
let canChangeBg = false;

document.addEventListener("mousedown", () => {
  canChangeBg = true;
});

myDiv.addEventListener("mouseover", (event) => {
  if (canChangeBg) {
    event.target.style.backgroundColor = "blue";
  }
});

// extra
document.addEventListener("mouseup", () => {
  canChangeBg = false;
});
