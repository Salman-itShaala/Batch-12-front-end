const parentOl = document.getElementById("my-ol");
const input = document.getElementById("my-input");

function addLi() {
  const newLi = document.createElement("li");
  // to get the value present inside input
  const sport = input.value;
  if (!sport) {
    alert("Not valid name");
    return;
  }
  newLi.innerText = sport;
  parentOl.appendChild(newLi);

  // clearing input box after adding value
  input.value = "";
}
