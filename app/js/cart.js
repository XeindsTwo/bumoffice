document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.querySelectorAll('.cart__product');

  const showToast = (message, type = 'info') => {
    Toastify({
      text: message,
      duration: 3000,
      gravity: 'top',
      position: 'right',
      backgroundColor: type === 'error' ? '#d9534f' : '#5bc0de',
    }).showToast();
  };

  const sendUpdateRequest = (item, quantity) => {
    const productName = item.querySelector('.cart__product-link').innerText;

    fetch('/update-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product: productName, quantity }),
    })
      .then(response => {
        if (!response.ok) throw new Error('Ошибка при отправке данных на сервер');
        return response.json();
      })
      .then(() => {
        showToast(`Товар "${productName}" обновлен: ${quantity} шт.`);
      })
      .catch(error => {
        showToast(`Ошибка: ${error.message}`, 'error');
      });
  };

  const validateValue = (value) => {
    if (isNaN(value) || value < 1) {
      showToast('Минимальное количество товара - 1', 'error');
      return 1;
    } else if (value > 1000) {
      showToast('Максимальное количество товара - 1000', 'error');
      return 1000;
    }
    return value;
  };

  cartItems.forEach(item => {
    const input = item.querySelector('.cart__value');
    const btnAdd = item.querySelector('.cart__btn.add');
    const btnRemove = item.querySelector('.cart__btn.remove');
    let inputTimer;
    let lastValue = parseInt(input.value, 10);

    const updateButtonsState = (value) => {
      btnAdd.disabled = value >= 1000;
      btnRemove.disabled = value <= 1;
      btnAdd.classList.toggle('disabled', value >= 1000);
      btnRemove.classList.toggle('disabled', value <= 1);
    };

    const updateQuantity = (delta) => {
      let value = validateValue(parseInt(input.value, 10) + delta);
      input.value = value;
      lastValue = value;
      updateButtonsState(value);
      sendUpdateRequest(item, value);
    };

    const delayedUpdate = () => {
      clearTimeout(inputTimer);
      inputTimer = setTimeout(() => {
        const currentValue = validateValue(parseInt(input.value, 10) || 1);
        input.value = currentValue;
        if (currentValue !== lastValue) {
          sendUpdateRequest(item, currentValue);
          lastValue = currentValue;
        }
        updateButtonsState(currentValue);
      }, 1000);
    };

    btnAdd.addEventListener('click', () => updateQuantity(1));
    btnRemove.addEventListener('click', () => updateQuantity(-1));
    input.addEventListener('input', delayedUpdate);
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        input.value = 1;
        lastValue = 1;
        showToast('Минимальное количество товара - 1', 'error');
        sendUpdateRequest(item, 1);
        updateButtonsState(1);
      }
    });

    updateButtonsState(lastValue); // Инициализация состояния кнопок при загрузке
  });
});