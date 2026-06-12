const burgerBtn = document.getElementById('burger-button');
const closeBtn = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-link');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});
