document.addEventListener('DOMContentLoaded', () => {
  const MIN_QUANTITY = 1;
  const MAX_QUANTITY = 100;

  document.querySelectorAll('.quantity').forEach(input => {
    const form = input.closest('form');
    const incrementButton = form.querySelector('.increment');
    const decrementButton = form.querySelector('.decrement');

    function updateQuantity(value) {
      if (value < MIN_QUANTITY) input.value = MIN_QUANTITY;
      else if (value > MAX_QUANTITY) input.value = MAX_QUANTITY;
      else input.value = value;
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
      if (input.value === '') input.value = MIN_QUANTITY;
    });

    form.addEventListener('submit', async (e) => {
      // сюда ещё добавишь айдишник товара если надо
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch('/path/to/your/script.py', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          console.log('Data sent successfully!');
        } else {
          console.error('Failed to send data:', response.statusText);
        }
      } catch (error) {
        console.error('Error occurred during data transmission:', error);
      }
    });
  });
});