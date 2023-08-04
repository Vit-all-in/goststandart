const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

// Hide menu

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

const scrollHeader = () => {
   const header = document.getElementById('header');
   this.scrollY >= 50 ? header.classList.add('header-bg') : header.classList.remove('header-bg');
}

window.addEventListener('scroll', scrollHeader);