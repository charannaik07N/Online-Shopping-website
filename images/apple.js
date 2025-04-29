const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
const totalSlides = slides.length;
const visibleSlides = 2; // Show 2 slides at a time

prevButton.addEventListener('click', () => {
    if (currentSlide === 0) {
        currentSlide = totalSlides - visibleSlides;
    } else {
        currentSlide--;
    }
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    if (currentSlide >= totalSlides - visibleSlides) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSliderPosition();
});

function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth;
    slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
