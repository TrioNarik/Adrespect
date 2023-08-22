const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");
const sliderItems = document.querySelectorAll(".slider-item");

let currentSlide = 0;

function showSlide(slideIndex) {
    sliderItems.forEach(item => item.classList.remove("active"));
    sliderItems[slideIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % sliderItems.length;
    showSlide(currentSlide);
});

// Pokaż pierwszy slajd na starcie
showSlide(currentSlide);