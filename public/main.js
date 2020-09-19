

const openMenu = () => {
    const menuContent = document.getElementById('menu-content');
    const closeBtn = document.getElementById('close');
    const hamburger = document.getElementById('hamburger');
    if (menuContent.style.display == 'block') {
      menuContent.style.display = 'none';
      closeBtn.style.display = 'none';
      hamburger.style.display = 'block';

    } else {
      menuContent.style.display = 'block';
      closeBtn.style.display = 'block';
      hamburger.style.display = 'none';
    }
} 

var slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}