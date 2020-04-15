const MAIN = document.querySelector('.main');
function addListeners() {
  document.querySelectorAll('.rotate').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.target.parentNode.parentNode.classList.add('transform');
    })
  });

 document.querySelectorAll('.category_section_block').forEach((item) => {
   item.addEventListener('mouseleave', (event) => {
     event.target.classList.remove('transform');
   })
 });
 
}
