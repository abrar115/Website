const menu_new = document.querySelector(".menu");
const sidebar = document.querySelector(".sidenav");

menu_new.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  menu_new.classList.toggle("active");
  menu_new.classList.contains("active")
});
const cursor = document.querySelector('.cursor');

 document.addEventListener('mousemove', e => {
   cursor.style.top = `${e.clientY}px`;
   cursor.style.left = `${e.clientX}px`;  
   })
