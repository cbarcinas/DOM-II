// Rotate image ========================================

const bodyImg1 = document.querySelector("#img-1");
const bodyImg2 = document.querySelector("#img-2");
// heroImg1.addEventListener("mouseover", (event) => {
//   heroImg1.style.transform = "rotate(-5deg)";
// });

// heroImg1.addEventListener("mouseout", (event) => {
//   heroImg1.style.transform = "rotate(0deg)";
// });

function rotate(event) {
  event.target.style.transform = "rotate(-5deg)";
}

function rotateReverse(event) {
  event.target.style.transform = "rotate(0deg)";
}

bodyImg1.addEventListener("mouseover", rotate);
bodyImg1.addEventListener("mouseout", rotateReverse);
bodyImg2.addEventListener("mouseover", rotate);
bodyImg2.addEventListener("mouseout", rotateReverse);

// advImg.addEventListener(‘dblclick’, () => {
//     if (event.type === ‘dblclick’) {
//         bottomImg.style.transform = “scaleX(-1)“;
//     }
// });

// Change h1 text Color ===================================
const headingColor = document.querySelector(".logo-heading");

headingColor.addEventListener("mouseover", (e) => {
  headingColor.style.color = "red";
});

headingColor.addEventListener("mouseout", (e) => {
  headingColor.style.color = "black";
});
