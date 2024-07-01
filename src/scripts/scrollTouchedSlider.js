const sliderContainer = document.querySelector(".cards-rates");
const sliderInner = document.querySelector(".cards-rates");
let isDown = false;
let startX;
let scrollLeft;

sliderContainer.scrollLeft = sliderInner.scrollWidth - sliderInner.clientWidth;

sliderContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  sliderContainer.classList.add("active");
  startX = e.pageX - sliderInner.offsetLeft;
  scrollLeft = sliderInner.scrollLeft;
});

sliderContainer.addEventListener("mouseleave", () => {
  isDown = false;
  sliderContainer.classList.remove("active");
});

sliderContainer.addEventListener("mouseup", () => {
  isDown = false;
  sliderContainer.classList.remove("active");
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderInner.offsetLeft;
  const walk = -(x - startX) * 2;
  sliderInner.scrollLeft = scrollLeft + walk;
});

sliderContainer.addEventListener("touchstart", (e) => {
  isDown = true;
  sliderContainer.classList.add("active");
  startX = e.touches[0].pageX - sliderInner.offsetLeft;
  scrollLeft = sliderInner.scrollLeft;
});

sliderContainer.addEventListener("touchend", () => {
  isDown = false;
  sliderContainer.classList.remove("active");
});

sliderContainer.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - sliderInner.offsetLeft;
  const walk = -(x - startX) * 2;
  sliderInner.scrollLeft = scrollLeft + walk;
});

sliderContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  const delta = Math.sign(e.deltaY);
  sliderInner.scrollLeft += -delta * 200;
});
