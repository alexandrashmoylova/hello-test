import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

console.log('Hello');