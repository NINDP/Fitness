const trainerSlides = document.querySelectorAll(".trainer-slide");
const arrow = document.querySelector(".arrow");
let currentTrainer = 0;

arrow.addEventListener("click", () => {
  trainerSlides[currentTrainer].classList.remove("active");
  currentTrainer = (currentTrainer + 1) % trainerSlides.length;
  trainerSlides[currentTrainer].classList.add("active");
});
