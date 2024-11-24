export function showToast(message, type = 'success') {
  const styles = {
    success: {
      background: 'green',
      fontSize: '17px'
    },
    error: {
      background: 'darkred',
      fontSize: '17px'
    },
  };

  Toastify({
    text: message,
    duration: 4000,
    gravity: 'top',
    position: 'right',
    style: styles[type],
  }).showToast();
}