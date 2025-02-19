// Add JavaScript functionality here (e.g., mobile navigation)
// This is a basic example, you'll want to expand on it

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.fa-bars');
    const navList = document.querySelector('nav ul'); // or the whole nav, depending on the effect you want
  
    if (menuIcon) {
      menuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');  // Add/remove a class to show/hide the menu
      });
    }
  });