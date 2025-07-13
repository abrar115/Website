
const menu = document.querySelector('.mobile-menu');
const links = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    console.log("HELLO")
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
    e.preventDefault(); // stop default navigation for a moment
    const href = link.getAttribute('href');

    menu.classList.remove('is-active');
    links.classList.remove('active');

    // Wait for animation to finish, then navigate
    setTimeout(() => {
      window.location.href = href;
    }, 300); // match your CSS transition time
  });
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  })