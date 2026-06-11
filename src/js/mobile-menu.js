const burgerBtn = document.getElementById('burger-button');
const mobileMenu = document.getElementById('mobile-menu');
const openIcon = document.getElementById('mobile-menu-open-icon');
const closeIcon = document.getElementById('mobile-menu-close-icon');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
  openIcon.classList.toggle('hide');
  closeIcon.classList.toggle('hide');
});
