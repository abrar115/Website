
const menu = document.querySelector('.mobile-menu');
const links = document.querySelector('.navbar__menu__js');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
})

document.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-active');
    links.classList.remove('active');
  });
});

document.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    menu.classList.remove('is-active');
    links.classList.remove('active');

    
    setTimeout(() => {
      window.location.href = href;
    }, 300); 
  });
});
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  })