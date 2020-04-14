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

function navigationOnPage(event){
  switch (event.target.innerText) {
    case 'Main Page':
      mainPage();
      break;
    case 'Action (set A)':
        createPage(ACTION_A);
        break;
        case 'Action (set B)':
            createPage(ACTION_B);
            break;
            case 'Action (set C)':
                createPage(ACTION_C);
                break;
                case 'Adjective':
                    createPage(ADJECTIVE);
                    break;
                    case 'Animal (set A)':
                        createPage(ANIMAL_A);
                        break;
                        case 'Animal (set B)':
                            createPage(ANIMAL_B);
                            break;
                            case 'Clothes':
                                createPage(CLOTHES);
                                break;
                                case 'Emotion':
                                    createPage(EMOTION);
                                    break;
    default: false;
  }
  document.querySelectorAll('.nav-item').forEach(item => {
    item.style.border = 0;
  });
  event.target.style.borderBottom = '3px solid #fff';
}

MENU.addEventListener('click', navigationOnPage);
