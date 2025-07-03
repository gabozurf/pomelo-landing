// js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const navMenuEl = document.getElementById('navMenu');
  const bsNavCollapse = new bootstrap.Collapse(navMenuEl, { toggle: false });

  // Solo enlaces de navegación *no* dropdown-toggle + los items del dropdown
  const navLinks = document.querySelectorAll(
    '.navbar-nav .nav-link:not(.dropdown-toggle), .dropdown-menu .dropdown-item'
  );

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Solo en móvil: escondemos el menú
      if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
        bsNavCollapse.hide();
      }
    });
  });
});
