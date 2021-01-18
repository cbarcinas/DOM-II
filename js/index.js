// use keydown escape to remove bus img
const busImg = document.querySelector("#bus-img");

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    busImg.remove();
  }
});

// Rotate image ========================================

const bodyImg1 = document.querySelector("#img-1");
const bodyImg2 = document.querySelector("#img-2");

gsap.from("img", {
  opacity: 1,
  duration: 2.5,
  x: 50,
  ease: "bounce.easeInOut",
});

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

// Change h1 text Color ===================================
const headingColor = document.querySelector(".logo-heading");

headingColor.addEventListener("mouseover", (e) => {
  headingColor.style.color = "red";
});

headingColor.addEventListener("mouseout", (e) => {
  headingColor.style.color = "black";
});

// paragraph slide in ======================================

// const paraText1 = document.querySelector(".para-1");

gsap.from(".para-1", {
  opacity: 0,
  duration: 2.5,
  x: -100,
  ease: "bounce.easeInOut",
});

gsap.from(".para-2", {
  opacity: 0,
  duration: 2.5,
  x: 100,
  ease: "bounce.easeInOut",
});

// onscroll animation ======================================
