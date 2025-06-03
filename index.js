// Smooth scrolling for navbar links
document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('nav a[href^="#"]');

  navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});