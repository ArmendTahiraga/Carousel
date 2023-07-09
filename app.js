const slides = document.getElementsByClassName("carousel-item");
const slideButtons = document.getElementsByClassName("slide-button");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
const totalSlides = slides.length;
let slidePosition = 0;

prevBtn.innerHTML = "<";
prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.innerHTML = ">";
nextBtn.addEventListener("click", moveToNextSlide);

for (const button of slideButtons) {
	button.addEventListener("click", moveSlide);
}

function moveSlide(event) {
	hideAllSlides();

	slidePosition = JSON.parse(event.target.id);

	slides[slidePosition].classList.add("carousel-item-visible");
	slides[slidePosition].classList.remove("carousel-item-hidden");
	slideButtons[slidePosition].classList.add("active");
}

function moveToPrevSlide() {
	hideAllSlides();

	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}

	slides[slidePosition].classList.add("carousel-item-visible");
	slides[slidePosition].classList.remove("carousel-item-hidden");
	slideButtons[slidePosition].classList.add("active");
}

function moveToNextSlide() {
	hideAllSlides();

	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}

	slides[slidePosition].classList.add("carousel-item-visible");
	slides[slidePosition].classList.remove("carousel-item-hidden");
	slideButtons[slidePosition].classList.add("active");
}

function hideAllSlides() {
	for (const slide of slides) {
		slide.classList.add("carousel-item-hidden");
	}

	for (const button of slideButtons) {
		button.classList.remove("active");
	}
}
