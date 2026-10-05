function initFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  if (!filterButtons.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      const targetSelector = button.dataset.target || '.filter-target';
      const items = document.querySelectorAll(targetSelector);
      const filters = Array.from(filterButtons).filter((chip) => chip.dataset.target === button.dataset.target || !chip.dataset.target);

      filters.forEach((chip) => {
        const isActive = chip === button;
        chip.classList.toggle('is-active', isActive);
        chip.setAttribute('aria-pressed', String(isActive));
      });

      items.forEach((item) => {
        const category = item.dataset.category || 'all';
        const match = filter === 'all' || category === filter;
        item.classList.toggle('is-hidden', !match);
      });
    });
  });
}
