const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});
