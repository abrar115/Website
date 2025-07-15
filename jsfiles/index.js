
const menu = document.querySelector('.mobile-menu');
const links = document.querySelector('.navbar__menu');


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



const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    }
     else{
       entry.target.classList.remove('show')
     }
  })
})


const hidden = document.querySelectorAll('.hidden')
const hiddenY = document.querySelectorAll('.hiddenY')
const hiddenX = document.querySelectorAll('.hiddenX')

hidden.forEach((el)=>{observer.observe(el)})

const observerY = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showY')
    }
     else{
       entry.target.classList.remove('showY')
     }
  })
})

hiddenY.forEach((ey)=>observerY.observe(ey))

const observerX = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showX')
    }
     else{
       entry.target.classList.remove('showX')
     }
  })
})
hiddenX.forEach((ex)=>observerX.observe(ex))
