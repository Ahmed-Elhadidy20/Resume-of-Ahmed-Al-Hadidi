// AOS Initialization
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Typed.js
new Typed('#typed', {
    strings: [
        'Front-End Developer',
        'UI/UX Enthusiast',
        'Responsive Web Designer',
        'Passionate Coder'
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1800,
    loop: true
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');

mobileBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Vanilla Tilt initialization
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 12,
    speed: 400,
    glare: true,
    "max-glare": 0.35,
    perspective: 1000
});
