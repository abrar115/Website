const menu = document.querySelector('#mobile-menu');
const links = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  })

const toggleCursorBtn = document.getElementById('cursor__btn');
let cursorVisible = true; // native cursor visible initially

toggleCursorBtn.addEventListener('click', (e) => {
  e.preventDefault();

  cursorVisible = !cursorVisible;

  if (cursorVisible) {
    document.body.classList.remove('hide-native-cursor'); // show native cursor
    toggleCursorBtn.querySelector('.button').textContent = 'Hide Cursor';
  } else {
    document.body.classList.add('hide-native-cursor'); // hide native cursor
    toggleCursorBtn.querySelector('.button').textContent = 'Show Cursor';
  }
})

