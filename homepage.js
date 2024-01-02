//Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//menu Open Close
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick =() =>{
  menu.classList.toggle("move")
  navbar.classList.toggle('open-menu');
};
//close Menu On Scroll
window.onscroll =() =>{
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
}
//Scrollreveal
const animate= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:'2500',
  delay:'400',
});
animate.reveal('navbar');
animate.reveal('.home-text',{origin:'left'});
animate.reveal('.home-img',{origin:'bottom'});
animate.reveal('.ser-box, .pro-box',{interval:100});
