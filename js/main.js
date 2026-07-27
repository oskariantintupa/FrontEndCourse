document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-menu a');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
});