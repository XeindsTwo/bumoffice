const closeModal = (modal) => {
  document.documentElement.classList.remove('active');
  modal.classList.remove('modal--active');
  restoreTabIndices();
  removeOutsideClickHandler(modal);
};

const openModal = (modal) => {
  document.documentElement.classList.add('active');
  modal.classList.add('modal--active');
  setModalFocus(modal);
  addOutsideClickHandler(modal);
};

const handleModalClose = (modal) => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeModal(modal);
    }
  });
};

const setModalFocus = (modal) => {
  const allElements = document.querySelectorAll('*');
  allElements.forEach((el) => {
    if (el !== modal && !modal.contains(el)) {
      el.setAttribute('tabindex', '-1');
    }
  });

  const firstFocusable = modal.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (firstFocusable) {
    firstFocusable.focus();
  }
};

const restoreTabIndices = () => {
  const allElements = document.querySelectorAll('[tabindex]');
  allElements.forEach((el) => {
    el.removeAttribute('tabindex');
  });
};

const addOutsideClickHandler = (modal) => {
  const outsideClickHandler = (e) => {
    if (!modal.contains(e.target)) {
      closeModal(modal);
    }
  };

  modal.outsideClickHandler = outsideClickHandler;
  document.addEventListener('mousedown', outsideClickHandler);
};

const removeOutsideClickHandler = (modal) => {
  if (modal.outsideClickHandler) {
    document.removeEventListener('mousedown', modal.outsideClickHandler);
    delete modal.outsideClickHandler;
  }
};

export {closeModal, openModal, handleModalClose};