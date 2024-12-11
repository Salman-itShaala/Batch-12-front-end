// working with attributes

// the extra info we provide in opening tag of element

// img --> src, alt
// a --> href

// select the element

const img = document.getElementById("my-img");

// accessing the attribute
console.log(img.getAttribute("src"));

function addImage() {
  img.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0G4Jj47yiz5zOPtf3AAha0jxUcoX4SAo_Gw&s"
  );

  img.removeAttribute("alt");
}
