const images = document.querySelector(".carousel-images");
const totalSlides = images.children.length;
let index = 0;

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  images.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  images.style.transform = `translateX(-${index * 100}%)`;
});