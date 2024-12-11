/* 
    background-color: aqua; color: blueviolet; border: 2px solid black;
 */

const para = document.getElementById("my-para");

function addClass() {
  para.classList.add("new-class");
}

function removeClass() {
  para.classList.remove("new-class");
}
function toggleClass() {
  para.classList.toggle("new-class");
}

function adddRemoveClass() {
  if (para.classList.contains("new-class")) {
    para.classList.remove("new-class");
  } else {
    para.classList.add("new-class");
  }
}
