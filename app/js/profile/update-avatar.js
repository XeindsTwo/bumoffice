import {showToast} from "../components/showToast.js";

const editAvatarBtn = document.querySelector('.profile__edit-avatar');
const avatarInput = document.createElement('input');
avatarInput.type = 'file';
avatarInput.accept = 'image/webp,image/png,image/jpeg';
avatarInput.hidden = true;
document.body.appendChild(avatarInput);

editAvatarBtn.addEventListener('click', function () {
  avatarInput.click();
});

avatarInput.addEventListener('change', function () {
  const file = avatarInput.files[0];
  if (!file) return;

  const allowedTypes = ['image/webp', 'image/png', 'image/jpeg'];
  if (!allowedTypes.includes(file.type)) {
    showToast('Допустимые типы файлов: webp, png, jpg, jpeg', 'error');
    return;
  }

  const maxSize = 3 * 1024 * 1024; // 3 MB
  if (file.size > maxSize) {
    showToast('Максимальный размер файла: 3MB', 'error');
    return;
  }

  const formData = new FormData();
  formData.append('avatar', file);

  fetch('/profile/update-avatar.py', {
    method: 'POST',
    body: formData,
    headers: {
      // возможные заголовки
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка при обновлении аватара');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const profileImg = document.querySelector('.profile__img');
      profileImg.src = URL.createObjectURL(file);
      showToast('Ваш аватар успешно обновлен!', 'success');
    })
    .catch(error => {
      console.error(error);
      showToast('Ошибка при обновлении аватара', 'error');
    });
});