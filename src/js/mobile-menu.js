const openBtn = document.getElementById('burger-button');
const closeBtn = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
