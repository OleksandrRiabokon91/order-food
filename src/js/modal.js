(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'), // Все кнопки открытия
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  // Открытие модалки + закрытие мобильного меню (если открыто)
  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof window.closeMobileMenu === 'function') {
        window.closeMobileMenu(); // Закрываем мобильное меню
      }
      toggleModal(); // Открываем модалку
    });
  });

  // Закрытие модалки
  refs.closeModalBtn.addEventListener('click', function () {
    toggleModal();
  });

  // Закрытие модалки по клавише ESC
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && refs.modal.classList.contains('is-open')) {
      toggleModal();
    }
  });

  // Функция для открытия и закрытия модалки
  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
