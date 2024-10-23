const IMAGES = ["./images/img-1.jpeg", "./images/img-2.jpeg", "./images/img-3.jpeg", "./images/img-4.jpeg"];
let INDEX = 0;

function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
function dotsInterActive(imageCon) {
  const allDots = document.querySelectorAll(".dot");

  allDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      INDEX = index;
      updateImage(imageCon);
      setActiveDot(dot);
    });
  });
}
function setActiveDot(activeDot) {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => dot.classList.remove("active"));
  activeDot.classList.add("active");
}

function updateImage(imageCon) {
  imageCon.src = IMAGES[INDEX];
  setActiveDot(document.querySelectorAll(".dot")[INDEX]); //NEW LEARNING
}
function autoNext() {
  INDEX = (INDEX + 1) % IMAGES.length;
  const imageCon = document.querySelector(".image-container");
  updateImage(imageCon);
  setActiveDot(document.querySelectorAll(".dot")[INDEX]);
}
function initialize() {
  const imageCon = document.querySelector(".image-container");
  const nextbtn = document.querySelector(".slider-next");
  const BackwardBtn = document.querySelector(".slider-backward");

  preloadImages(IMAGES);
  updateImage(imageCon);
  dotsInterActive(imageCon);
  nextbtn.addEventListener("click", () => {
    INDEX = (INDEX + 1) % IMAGES.length;
    // imageCon.src = IMAGES[INDEX];
    updateImage(imageCon);
  });

  BackwardBtn.addEventListener("click", () => {
    INDEX = (INDEX - 1 + IMAGES.length) % IMAGES.length;

    // imageCon.src = IMAGES[INDEX];
    updateImage(imageCon);
    console.log(INDEX);
  });
  setInterval(autoNext, 5000);
}

initialize();
