const slides = document.getElementsByClassName("carousel-item")
const prevBtn = document.getElementById("prev-slide")
const nextBtn = document.getElementById("next-slide")
const totalSlides = slides.length
let slidePosition = 0

prevBtn.addEventListener("click", moveToPrevSlide)
nextBtn.addEventListener("click", moveToNextSlide)

function moveToPrevSlide() {
   hideAllSlides()

   if (slidePosition === 0) {
      slidePosition = totalSlides - 1
   } else {
      slidePosition--
   }
   slides[slidePosition].classList.add("carousel-item-visible")
   slides[slidePosition].classList.remove("carousel-item-hidden")
}
function moveToNextSlide() {
   hideAllSlides()

   if (slidePosition === totalSlides - 1) {
      slidePosition = 0
   } else {
      slidePosition++
   }
   slides[slidePosition].classList.add("carousel-item-visible")
   slides[slidePosition].classList.remove("carousel-item-hidden")
}
function hideAllSlides() {
   for (let slide of slides) {
      slide.classList.add("carousel-item-hidden")
   }
}
