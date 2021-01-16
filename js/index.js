// Rotate image
const advImg = document.querySelector("#adventure-img");

advImg.addEventListener("click", (event) => {
  advImg.style.transform = "rotate(25deg)";
});

// advImg.addEventListener(‘dblclick’, () => {
//     if (event.type === ‘dblclick’) {
//         bottomImg.style.transform = “scaleX(-1)“;
//     }
// });

// Change h1 text Color
const headingColor = document.querySelector(".logo-heading");

headingColor.addEventListener("mouseover", (e) => {
  headingColor.style.color = "red";
});

headingColor.addEventListener("mouseout", (e) => {
  headingColor.style.color = "black";
});
