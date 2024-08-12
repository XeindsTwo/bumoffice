document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('quantity');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const MIN_QUANTITY = 1;
  const MAX_QUANTITY = 100;

  function updateQuantity(value) {
    if (value < MIN_QUANTITY) {
      input.value = MIN_QUANTITY;
    } else if (value > MAX_QUANTITY) {
      input.value = MAX_QUANTITY;
    } else {
      input.value = value;
    }
  }

  incrementButton.addEventListener('click', () => {
    let currentQuantity = parseInt(input.value);
    updateQuantity(currentQuantity + 1);
  });

  decrementButton.addEventListener('click', () => {
    let currentQuantity = parseInt(input.value);
    updateQuantity(currentQuantity - 1);
  });

  input.addEventListener('input', () => {
    let currentQuantity = parseInt(input.value);
    updateQuantity(currentQuantity);
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.value = MIN_QUANTITY;
    }
  });
});