
const menu = document.querySelector('.mobile-menu');
const links = document.querySelector('.navbar__menu');
const ct = document.querySelector('.ct2')
const js = document.querySelector('.js')
const py = document.querySelector('.py')
const ct1 = document.querySelector('.ct1')
const js1 = document.querySelector('.js1')
const py1 = document.querySelector('.py1')
const html = document.querySelector('.html')

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
if (document.URL.includes("options.html")){

ct.addEventListener('mouseenter', ()=>{
  ct1.style.display="block"
})
ct.addEventListener('mouseleave', ()=>{
  ct1.style.display="none"
})

js.addEventListener('mouseenter', ()=>{
  js1.style.display="block"
})
js.addEventListener('mouseleave', ()=>{
  js1.style.display="none"
})

py.addEventListener('mouseenter', ()=>{
 py1.style.display="block"
})
py.addEventListener('mouseleave', ()=>{
  py1.style.display="none"
})

// html.addEventListener('mouseOver', ()=>{
//   html.classList.add('visible')
// })
// html.addEventListener('mouseOut', ()=>{
//   html.classList.remove('visible')
// })
}