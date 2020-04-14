const HAMBURGER = document.getElementById('hamburger-menu');
const MENU = document.getElementById('nav');

function showMenu(e) {
  e.stopPropagation();
  HAMBURGER.classList.toggle('open');
  MENU.classList.toggle('show');
}
HAMBURGER.addEventListener('click', showMenu);

document.addEventListener('click', (event) =>{
  if (HAMBURGER.classList.contains('open') && event.target !=MENU) {
    HAMBURGER.classList.remove('open');
    MENU.classList.remove('show');
  }
});
