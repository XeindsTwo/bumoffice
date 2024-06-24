import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();

new Swiper('.prizes__swiper', {
  loop: false,
  speed: 800,
  navigation: {
    prevEl: '.prizes__btn--prev',
    nextEl: '.prizes__btn--next'
  },
  keyboard: {
    enabled: true
  },
});