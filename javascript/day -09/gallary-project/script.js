const img = document.getElementById("my-img");

const imagesArray = [
  "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
  "https://www.ricoh-imaging.co.jp/japan/products/kf/ex/img/ex-pic01.jpg",
  "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
  "https://www.sony.net/Products/di_photo-gallery/images/extralarge/1887.JPG",
];

function changeImage(index) {
  img.setAttribute("src", imagesArray[index]);
}

// const images = document.querySelectorAll(".image");

// for (let i = 0; i < images.length; i++) {
//   images[i].addEventListener("click",  (e) => {
//     const imageSrc = e.target.getAttribute("src");
//     img.setAttribute("src", imageSrc);
//   });
// }
