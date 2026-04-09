function setLang(lang) {
  const body = document.body;
  const arEls = document.querySelectorAll('.ar');
  const enEls = document.querySelectorAll('.en');
  const btns = document.querySelectorAll('.lang-btn');

  if (lang === 'en') {
    body.classList.add('lang-en');
    body.setAttribute('dir', 'ltr');
    body.setAttribute('lang', 'en');
    arEls.forEach(el => el.style.display = 'none');
    enEls.forEach(el => {
      el.style.display = el.classList.contains('inline') ? 'inline' : 'block';
    });
    btns[0].classList.remove('active');
    btns[1].classList.add('active');
  } else {
    body.classList.remove('lang-en');
    body.setAttribute('dir', 'rtl');
    body.setAttribute('lang', 'ar');
    arEls.forEach(el => {
      el.style.display = el.classList.contains('inline') ? 'inline' : 'block';
    });
    enEls.forEach(el => el.style.display = 'none');
    btns[0].classList.add('active');
    btns[1].classList.remove('active');
  }
}

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-fill');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const width = e.target.style.width;
      e.target.style.width = '0';
      setTimeout(() => { e.target.style.width = width; }, 100);
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(b => barObserver.observe(b));