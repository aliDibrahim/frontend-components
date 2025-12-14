let scrollContainer = document.querySelector(".gallery");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
});

let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += scrollContainer.offsetWidth / 3;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= scrollContainer.offsetWidth / 3;
});
