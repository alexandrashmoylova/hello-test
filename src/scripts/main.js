// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const swiper = new Swiper('.swiper', {
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });

const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

header.classList.remove("header--nojs");

const openmenuNav = (evt) => {
  evt.preventDefault();
  header.classList.toggle("header--open");
  nav.classList.toggle("nav--animate");
};

burger.addEventListener("click", openmenuNav);

console.log('Hello');