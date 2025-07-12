const menu1 = document.querySelector('#mobile-menu-projects');
const links1 = document.querySelector('.navbar__menu__projects');

menu1.addEventListener('click', function(){
    console.log("Toggle clicked");
    menu1.classList.toggle('is-active');
    links1.classList.toggle('active');
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  })
