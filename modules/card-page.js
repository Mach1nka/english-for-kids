const MAIN = document.querySelector('.main');
function addListeners() {
  let cards = document.querySelectorAll('.category_section_block');

  document.querySelectorAll('.rotate').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.target.parentNode.parentNode.classList.add('transform');
    })
  });

 cards.forEach((item) => {
   item.addEventListener('mouseleave', (event) => {
     event.target.classList.remove('transform');
   })
 });

 cards.forEach((item) => {
   item.addEventListener('click', (event) => {
     let sound = new Audio(item.getAttribute('data-audio'));
     sound.play();
   })
 });
}
