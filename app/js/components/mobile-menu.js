const htmlPage = document.documentElement;
const menuBtn = document.querySelector('.menu-btn');
const headerMobile = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.blur();
  htmlPage.classList.toggle('menu');
  menuBtn.classList.toggle('active');
  headerMobile.classList.toggle('active');
});