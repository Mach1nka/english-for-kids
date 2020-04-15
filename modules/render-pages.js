function mainPage() {
  while (MAIN.firstChild) {
    MAIN.removeChild(MAIN.firstChild);
  }
  const NAMES = ['Action (set A)', 'Action (set B)','Action (set C)','Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'];
  const IMAGES = ['data/img/fish.jpg','data/img/open.jpg','data/img/pull.jpg','data/img/old.jpg' ,'data/img/cat.jpg','data/img/lion.jpg','data/img/boot.jpg','data/img/laugh.jpg'];
  const ID_SECTIONS = ["action_a","action_b","action_c","adjective","animal_a","animal_b","clothes","emotion"];
  let z = 0;
  for (let i = 0; i < NAMES.length; i++) {
    MAIN.insertAdjacentHTML('beforeend',`<section class="main_section_block" id=${ID_SECTIONS[z++]}>
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
  while (MAIN.firstChild) {
    MAIN.removeChild(MAIN.firstChild);
  }
  for (let i = 0; i < arrayOfObjects.length; i++ ) {
    MAIN.insertAdjacentHTML('beforeend',`<section class="category_section_block">
    <div class="card front"><div class="section_description"><p>${arrayOfObjects[i].word}</p></div><div class="rotate"></div></div>
    <div class="card back"><div class="section_description"><p>${arrayOfObjects[i].translation}</p></div></div>
    </section>`);
  }
  for (let i = 0; i < arrayOfObjects.length ;) {
    document.querySelectorAll('.front').forEach( (item) => {
      item.style.backgroundImage = `url('${arrayOfObjects[i++].image}')`;
    });
  }
  for (let i = 0; i < arrayOfObjects.length ;) {
    document.querySelectorAll('.back').forEach( (item) => {
      item.style.backgroundImage = `url('${arrayOfObjects[i++].image}')`;
    });
  }
  addListeners(); // call events
}
