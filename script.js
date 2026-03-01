document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('js-loaded');

  // --- MOBILE MENU ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // --- SCROLL REVEAL ---
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(reveal => revealObserver.observe(reveal));

  // --- TYPING EFFECT ---
  const typedTextSpan = document.getElementById("typed-text");
  const textArray = ["Laptop & Desktop Repair.", "Motherboard Chip-Level Repair.", "Data Backup & Recovery.", "IT Network Support."];
  let textArrayIndex = 0, charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
      setTimeout(type, 100);
    }
  }

  setTimeout(type, 1500);
});

// --- NAVBAR SCROLL ---
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true }); // 'passive' makes scrolling much smoother

// --- DARK MODE ---
function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById('theme-btn');
  const isDark = body.classList.toggle('dark');
  btn.innerText = isDark ? '☀️' : '🌙';
}