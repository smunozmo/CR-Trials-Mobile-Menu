// Mobile Menu Variables
const containerMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu-open');
const linkMenu = document.querySelectorAll('.menu a');

// Mobile Menu Functions
function menuOpen() {
  containerMenu.style.display = 'flex';
}
function menuClose() {
  containerMenu.style.display = 'none';
}

// Mobile Menu Events
linkMenu.forEach((link) => {
  link.addEventListener('click', menuClose);
});

openMenu.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', menuClose);

// Modal Events
openModal.forEach((button) => {
  button.addEventListener('click', modalOpen);
});
