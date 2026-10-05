function initScrollReveal() {
  const revealItems = document.querySelectorAll('.fade-up');
  if (!revealItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target || 0);
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = `${value}${el.dataset.suffix || ''}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function initAccordions() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      items.forEach((panel) => {
        panel.classList.remove('is-open');
      });
      if (!isOpen) item.classList.add('is-open');
    });
  });
}

function initBackToTop() {
  const button = document.querySelector('.back-to-top');
  if (!button) return;

  const toggleVisibility = () => {
    if (window.scrollY > 360) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }
  };

  toggleVisibility();
  window.addEventListener('scroll', toggleVisibility, { passive: true });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initModal() {
  const modal = document.querySelector('[data-modal]');
  const trigger = document.querySelector('[data-open-modal]');
  const close = document.querySelector('[data-close-modal]');

  if (!modal || !trigger) return;

  trigger.addEventListener('click', () => modal.classList.add('is-visible'));
  if (close) {
    close.addEventListener('click', () => modal.classList.remove('is-visible'));
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.remove('is-visible');
  });
}
