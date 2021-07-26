let slideIndex = 0;
showSlides();

// Next/previous controll
function nextSlide() {
  slideIndex++;
  showSlides();
}
function prevSlide() {
  slideIndex--;
  showSlides();
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex].classList.add("active");
}

setInterval(nextSlide, 10000);
