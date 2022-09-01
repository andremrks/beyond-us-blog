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

/* Function to Slide */

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    focus  : 'center',
  } );
  
splide.mount();