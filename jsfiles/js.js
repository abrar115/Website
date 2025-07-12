
const menu = document.querySelector('#mobile-menu__js');
const links = document.querySelector('.navbar__menu__js');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
})
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  })