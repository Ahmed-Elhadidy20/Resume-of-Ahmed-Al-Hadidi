// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Language switching functionality
  const langBtns = document.querySelectorAll('.lang-btn');
  
  function setLanguage(lang) {
    const body = document.body;
    
    if (lang === 'en') {
      body.classList.add('lang-en');
      body.setAttribute('dir', 'ltr');
      body.setAttribute('lang', 'en');
      langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === 'en') {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    } else {
      body.classList.remove('lang-en');
      body.setAttribute('dir', 'rtl');
      body.setAttribute('lang', 'ar');
      langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === 'ar') {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }
  
  // Add click event to language buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
  
  // Set default language (Arabic)
  setLanguage('ar');
  
  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  
  sections.forEach(section => observer.observe(section));
  
  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-fill');
  
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => barObserver.observe(bar));
  
});
