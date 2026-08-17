const menuButton = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    mobileMenu?.classList.remove('open');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const cards = document.querySelectorAll('.service-card, .value-grid article, .problem-cards article');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach(card => observer.observe(card));
