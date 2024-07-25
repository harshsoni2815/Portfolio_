let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

let a=0;
window.onscroll = ()=>{
  section.forEach(sec=>{
    let top = window.scrollY
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    console.log(offset);

    if(top>=offset && top< offset+height){
      navlink.forEach(link=>{
          link.classList.remove('active');
          document.querySelector('header nav a[href*='+id+']').classList.add('active');
      });
    }
  });
};
 
/* toggle effect in nav bar */
let menu = document.querySelector('#menu-icon');
let nav = document.querySelector(".nav-bar");
menu.addEventListener("click",()=>{
menu.classList.toggle("fa-x");
nav.classList.toggle('active');
});

ScrollReveal({ 
  /* reset: true, */
  distance:'80px',
  duration:2000,
  delay:200
 });

 ScrollReveal().reveal('.home-content , .heading',{origin:'top'});
 ScrollReveal().reveal('.photo ,.portfolio-container ,.container-box , .contact',{origin:'bottom'});
 ScrollReveal().reveal('.home-content h1 ',{origin:'left'});
 ScrollReveal().reveal('.home-content p,.about p',{origin:'right'});
 
 let typed = new Typed('#names', {
  strings: ["Front-end developer","backend-developer","MERN stack developer"],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:100,
  loop:true
});
