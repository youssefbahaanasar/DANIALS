var typed = new Typed("#element", {
  strings: [ "Developer", "Designer", "Larry Daniels"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1000,
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll' , ()=>{
  if (window.scrollY>700) {
    navbar.classList.add('fixed-top');
    navbar.classList.add('nav-scroll');
  }else{
    navbar.classList.remove('fixed-top');
    navbar.classList.remove('nav-scroll');
  }
} )