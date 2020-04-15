function navigationOnMainPage() {
  let navItems = document.querySelectorAll('.nav-item');
  document.querySelectorAll('.main_section_block').forEach((item) => {
    item.addEventListener('click', (event) => {
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      switch (item.getAttribute('id')) {
        case 'action_a':
            createPage(ACTION_A);
            navItems[1].classList.add('active');
            break;
            case 'action_b':
                createPage(ACTION_B);
                navItems[2].classList.add('active');
                break;
                case 'action_c':
                    createPage(ACTION_C);
                    navItems[3].classList.add('active');
                    break;
                    case 'adjective':
                        createPage(ADJECTIVE);
                        navItems[4].classList.add('active');
                        break;
                        case 'animal_a':
                            createPage(ANIMAL_A);
                            navItems[5].classList.add('active');
                            break;
                            case 'animal_b':
                                createPage(ANIMAL_B);
                                navItems[6].classList.add('active');
                                break;
                                case 'clothes':
                                    createPage(CLOTHES);
                                    navItems[7].classList.add('active');
                                    break;
                                    case 'emotion':
                                        createPage(EMOTION);
                                        navItems[8].classList.add('active');
                                        break;
        default: false;
      }
    })
  });
}
