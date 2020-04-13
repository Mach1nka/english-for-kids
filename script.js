function mainPage() {
  const NAMES = ['Action (set A)', 'Action (set B)','Action (set C)','Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'];
  const IMAGES = ['data/img/fish.jpg','data/img/open.jpg','data/img/pull.jpg','data/img/old.jpg' ,'data/img/cat.jpg','data/img/lion.jpg','data/img/boot.jpg','data/img/laugh.jpg'];
  let descriptionOfMain = document.querySelectorAll('.section_description');
  let sectionImage = document.querySelectorAll('.section_img');
  let i=0;
  let n=0;
  descriptionOfMain.forEach((item) => {
    item.innerHTML = `<p>${NAMES[i++]}</p>`;
  });
  sectionImage.forEach((item) => {
    item.innerHTML = `<img src='${IMAGES[n++]}'>`;
  });
}

mainPage();

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
