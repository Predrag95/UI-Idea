const burgerMenu = document.querySelector('.burger__menu');
const burgerDrop = document.querySelector('.burger__drop');

burgerMenu.addEventListener('click', menuDrop);

function menuDrop() {
  if (burgerDrop.style.display = 'none') {
      burgerDrop.style.display = 'block';
      burgerMenu.style.zIndex = '1';   
  } 
}
