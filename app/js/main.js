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

new Swiper('.home-catalog__swiper', {
  speed: 600,
  spaceBetween: 10,
  navigation: {
    prevEl: '.home-catalog__btn--prev',
    nextEl: '.home-catalog__btn--next'
  },
  keyboard: {
    enabled: true
  },
  breakpoints: {
    240: {
      slidesPerView: 'auto'
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 15
    },
  }
});