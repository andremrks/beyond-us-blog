/* Function to change nav when scroll */

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

/* Function to toggle menu */

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}

/* Slide function */

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function() {
    counter++;
    carousel();
});
prevBtn.addEventListener('click', function() {
    counter--;
    carousel();
});

function carousel() {

if(counter === slides.length) {
    counter=0
}
if(counter < 0) {
    counter = slides.length - 1;
}

    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}
