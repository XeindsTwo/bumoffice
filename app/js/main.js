/*import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();*/

new Swiper('.start__swiper', {
  speed: 700,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: false
  },
  navigation: {
    prevEl: '.start__btn--prev',
    nextEl: '.start__btn--next'
  },
  pagination: {
    type: 'bullets',
    el: '.start__pagination'
  },
  keyboard: {
    enabled: true
  },
  breakpoints: {
    440: {
      spaceBetween: 30
    }
  }
});