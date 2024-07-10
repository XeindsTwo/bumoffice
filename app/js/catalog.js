const html = document.documentElement;
const filterBtn = document.getElementById('catalog-filters-open');
const filterBtnClose = document.getElementById('catalog-filters-close');
const filtersMenu = document.querySelector('.catalog__filters');

filterBtn.addEventListener('click', () => {
  filterBtn.blur();
  html.classList.toggle('active');
  filtersMenu.classList.toggle('active');
});

filterBtnClose.addEventListener('click', () => {
  filterBtnClose.blur();
  html.classList.remove('active');
  filtersMenu.classList.remove('active');
});

document.addEventListener('click', (event) => {
  if (!filtersMenu.contains(event.target) && !filterBtn.contains(event.target)) {
    html.classList.remove('active');
    filtersMenu.classList.remove('active');
  }
});

const regionElement = document.getElementById('availability-select');
const regionElement2 = document.getElementById('price-select');
const regionSelect = new Choices(regionElement, {allowHTML: true, searchEnabled: false});
const regionSelect2 = new Choices(regionElement2, {allowHTML: true, searchEnabled: false});