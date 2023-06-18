const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const lien = document.querySelectorAll('.liens-navigation');

burger.addEventListener('click', ()=> {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
})




lien.addEventListener('click', function(){
  nav.classList.remove('active');
  burger.classList.remove('active');
})


const retourHaut = document.querySelector('.retourHaut');
let hauteurAvantNav = nav.offsetTop;


let changeFond = () => {
  if(window.scrollY >= 300) {
    nav.classList.add('font-scroll')
  } else {
    nav.classList.remove('font-scroll')
  }
  if (window.scrollY >= 500) {
    retourHaut.classList.add('active')
  }else {
    retourHaut.classList.remove('active')
  }
}



window.addEventListener('scroll', changeFond)