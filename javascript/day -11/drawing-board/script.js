const boxes = document.querySelectorAll(".box"); // [,,,,,,.....]
const colorInput = document.getElementById("color-input");

let canDraw = false;
let color = "black";

document.addEventListener("mousedown", () => {
  canDraw = true;
});

document.addEventListener("mouseup", () => {
  canDraw = false;
});

for (let i = 0; i < 2500; i++) {
  boxes[i].addEventListener("mouseover", () => {
    if (canDraw) {
      boxes[i].style.backgroundColor = color;
    }
  });
}

colorInput.addEventListener("change", () => {
  color = colorInput.value;
});

function erase() {
  color = "white";
}
