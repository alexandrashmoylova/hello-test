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
const modal = document.querySelector('.modal');
const popup = document.querySelector('.modal__inner');
const openPopupButton = document.querySelector('.intro__btn');
const closePopupButton = document.querySelector('.modal__close');
const form = document.getElementById('modal-form');
const isEscapeKey = (evt) => evt.key === 'Escape';

header.classList.remove("header--nojs");

const openmenuNav = (evt) => {
  evt.preventDefault();
  header.classList.toggle("header--open");
  nav.classList.toggle("nav--animate");
};

burger.addEventListener("click", openmenuNav);

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const onPopupCloseButtonClick = () => {
  closePopup();
};

const onWindowCloseByClick = (evt) => {
  closePopupByClick(evt);
};

function closePopupByClick(evt) {
  if (evt.target === modal) {
    closePopup();
  }
}

function closePopup() {
  modal.classList.remove('modal--active');
  popup.classList.remove('modal__inner--active');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupCloseButtonClick);
  document.removeEventListener('click', onWindowCloseByClick);
  form.reset();
}

function openPopup(evt) {
  evt.preventDefault();
  modal.classList.add('modal--active');
  popup.classList.add('modal__inner--active');
  closePopupButton.addEventListener('click', onPopupCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowCloseByClick);
}

openPopupButton.addEventListener('click', openPopup);

console.log('Hello');