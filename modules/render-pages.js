function mainPage() {
  const NAMES = ['Action (set A)', 'Action (set B)','Action (set C)','Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'];
  const IMAGES = ['data/img/fish.jpg','data/img/open.jpg','data/img/pull.jpg','data/img/old.jpg' ,'data/img/cat.jpg','data/img/lion.jpg','data/img/boot.jpg','data/img/laugh.jpg'];
  const ID_SECTIONS = ["action_a","action_b","action_c","adjective","animal_a","animal_b","clothes","emotion"];
  let z = 0;
  for (let i = 0; i < NAMES.length; i++) {
    document.querySelector('.main').insertAdjacentHTML('beforeend',`<section class="main_section_block" id=${ID_SECTIONS[z++]}>
      <div class="section_img"></div>
      <div class="section_description"></div>
    </section>`)
  }
  let descriptionOfMain = document.querySelectorAll('.section_description');
  let sectionImage = document.querySelectorAll('.section_img');
  let i=0;
  let n=0;
  descriptionOfMain.forEach((item) => {
    item.innerHTML = `<p>${NAMES[i++]}</p>`;
  });
  sectionImage.forEach((item) => {
    item.innerHTML = `<img src=${IMAGES[n++]}>`;
  });
}
mainPage();




function createPage(arrayOfObjects) {
  let main = document.querySelector('.main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  for (let i = 0; i < arrayOfObjects.length; i++) {
    document.querySelector('.main').insertAdjacentHTML('beforeend',`<section class="category_section_block">
      <div class="section_description"><p>${arrayOfObjects[i].word}</p></div>
    </section>`);
  }
  for (let i = 0; i < arrayOfObjects.length ;) {
    document.querySelectorAll('.category_section_block').forEach( (item) => {
      item.style.backgroundImage = `url('${arrayOfObjects[i++].image}')`;
    });
  }
}
