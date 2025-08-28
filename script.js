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


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector("button");

  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector("button").textContent = "+";
    });

    if (!isActive) {
      item.classList.add("active");
      btn.textContent = "−";
    }
  });
});
