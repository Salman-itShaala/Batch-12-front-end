const myH1 = document.getElementById("my-h1");

const myPara = document.getElementById("my-para");

localStorage.setItem("userName", "Salman Shaikh");

// create a function which will change innerText of selected h1 element

function changeContent() {
  // myH1 = null
  myH1.innerHTML = "Hello how are you?" + localStorage.getItem("userName");
  myH1.classList.add("h1-class");
}

// select para and add one sentence into it.

function addSomeText() {
  const textToadd = prompt("Enter some text to add into para");
  myPara.innerText = textToadd;
  myPara.style.cssText =
    "border : 2px solid black; background-color: yellow; padding: 10vh;";
}

function toggleVisibility() {
  // theme
  //   document.body.style.backgroundColor = "black";
  //   document.body.style.color = "white";

  myH1.style.display === "none"
    ? (myH1.style.display = "block")
    : (myH1.style.display = "none");
}
