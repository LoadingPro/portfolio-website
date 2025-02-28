// script.js

console.log("Portfolio loaded");

// Prikaz gumba "Back to Top" nakon skrolanja
window.addEventListener("scroll", function() {
    const button = document.getElementById("backToTop");
    if (window.pageYOffset > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
  
  // Funkcionalnost za povratak na vrh
  document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  