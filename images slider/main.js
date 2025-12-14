// images library
let library = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.png",
  "./images/image5.jpg",
  "./images/image6.png",
];
addSpans();
// ---------------------------------------------
// Selectors
let currentImage = document.getElementById("current-image");
let totalImages = document.getElementById("total-images");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let imagesNumberSpans = document.querySelectorAll(
  ".images-slider .control .images-number span"
);
let image = document.querySelector(".images-slider .image");
// ---------------------------------------------
// initial settings
const imagesCount = library.length;
totalImages.innerHTML = `#${imagesCount}`;
let currentIndex = 0;
previous.disabled = true;
next.addEventListener("click", () => {
  nextImage();
});
previous.addEventListener("click", () => {
  previousImage();
});
addActiveClass(currentIndex);
setCurrentImageNumber();
setImage(currentIndex);
// ---------------------------------------------
// functions
function setImage(index) {
  image.style.backgroundImage = `url("${library[index]}")`;
}
// ---------------------------------------------
function nextImage() {
  if (currentIndex < library.length - 1) {
    previous.disabled = false;
  }
  if (currentIndex === library.length - 2) {
    next.disabled = true;
  }
  setImage(++currentIndex);
  addActiveClass(currentIndex);
  setCurrentImageNumber();
}
// ---------------------------------------------
function previousImage() {
  if (currentIndex > 0) {
    next.disabled = false;
  }
  if (currentIndex === 1) {
    previous.disabled = true;
  }
  setImage(--currentIndex);
  addActiveClass(currentIndex);
  setCurrentImageNumber();
}
// ---------------------------------------------
function addActiveClass(index) {
  imagesNumberSpans.forEach((ele, index) => {
    if (index === currentIndex) {
      ele.classList.add("active");
    } else {
      ele.classList.remove("active");
    }
  });
}
// ---------------------------------------------
function addSpans() {
  let imagesNumber = document.querySelector(
    ".images-slider .control .images-number "
  );
  library.forEach((ele, index) => {
    let span = document.createElement("span");
    let text = document.createTextNode(`${index + 1}`);
    span.appendChild(text);
    imagesNumber.appendChild(span);
  });
}
// ---------------------------------------------
function setCurrentImageNumber() {
  currentImage.innerHTML = `#${currentIndex + 1}`;
}
// ---------------------------------------------
imagesNumberSpans.forEach((ele) => {
  ele.addEventListener("click", () => {
    let clicked = Number(ele.innerHTML) - 1;
    currentIndex = clicked;
    setImage(currentIndex);
    addActiveClass(currentIndex);
    setCurrentImageNumber();
    if (clicked === library.length - 1) {
      next.disabled = true;
      previous.disabled = false;
    } else if (clicked === 0) {
      previous.disabled = true;
      next.disabled = false;
    } else {
      next.disabled = false;
      previous.disabled = false;
    }
  });
});
