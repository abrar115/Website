const menu = document.querySelector('#mobile-menu');
const links = document.querySelector('.navbar__menu');
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});