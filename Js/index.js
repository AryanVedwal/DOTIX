document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu
    const navBtns = document.querySelectorAll('.nav-btn');
    const mainMenu = document.querySelector('.side-menu');
  
    navBtns.forEach(navBtn => {
      navBtn.addEventListener('click', () => {
        mainMenu.classList.toggle('open');
      });
    });
  
    // Change navbar background on scroll
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });
  