window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});
