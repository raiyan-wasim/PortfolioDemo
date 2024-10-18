// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Responsive Menu Toggle
const nav = document.querySelector('nav');
const toggleMenu = document.createElement('button');
toggleMenu.classList.add('menu-toggle');
toggleMenu.innerHTML = '<i class="fas fa-bars"></i>';
document.body.prepend(toggleMenu);

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Close menu on link click (mobile)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.textContent = '🌙 Dark Mode';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});

// Scroll Animations for Fade and Slide-in
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    const scrollPosition = window.innerHeight + window.scrollY;

    elements.forEach(el => {
        if (el.getBoundingClientRect().top + window.scrollY < scrollPosition) {
            el.classList.add('visible');
        }
    });
});
