// Hamburger menu functionality
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Account for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Animate on scroll functionality
function checkScroll() {
  const animatedElements = document.querySelectorAll('.fade-in, .zoom-in');
  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      el.classList.add('active');
    }
  });
}

// Skills progress animation
function animateSkills() {
  const skillLines = document.querySelectorAll('.skill_name .line::after');
  skillLines.forEach(line => {
    const parent = line.parentElement.previousElementSibling;
    const percentText = parent.querySelector('span').textContent;
    const percent = percentText.replace('%', '');
    line.style.width = '0%';
    setTimeout(() => {
      line.style.width = percentText;
    }, 500);
  });
}

// Contact form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('.dark-mode-toggle i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('dark-mode', 'disabled');
  }
}

// On DOM Load
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved dark mode preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const darkModeIcon = document.querySelector('.dark-mode-toggle i');
    if (darkModeIcon) {
      darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    }
  }

  // Initialize scroll checks and skill animations
  checkScroll();
  setTimeout(animateSkills, 1000);

  // Animate sections using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});

// Scroll event listener
window.addEventListener('scroll', checkScroll);

function openPopup(imageName) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popup-image");
  popupImage.src = `./assets/${imageName}.png`;
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
