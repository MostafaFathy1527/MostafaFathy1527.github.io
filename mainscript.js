const menuToggle = document.querySelector('.menu-toggle');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', () => {
  menuContainer.style.display = menuContainer.style.display === 'block' ? 'none' : 'block';
});