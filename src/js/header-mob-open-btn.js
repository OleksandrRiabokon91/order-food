(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    menu: document.querySelector('[data-mobile-menu]'),
  };

  // Открытие/закрытие мобильного меню
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }

  // Закрытие мобильного меню при клике на ссылки
  document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.mobile-menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        refs.menu.classList.remove('is-open');
      });
    });
  });

  // Делаем функцию глобальной
  window.closeMobileMenu = function () {
    refs.menu.classList.remove('is-open');
  };
})();
