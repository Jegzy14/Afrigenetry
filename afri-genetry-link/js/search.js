function initSearch() {
  const searchInputs = document.querySelectorAll('.search-input');

  searchInputs.forEach((input) => {
    const targetSelector = input.dataset.target || '.filter-target';
    const resultMeta = document.querySelector(input.dataset.summary || '.results-meta');

    input.addEventListener('input', (event) => {
      const query = event.target.value.trim().toLowerCase();
      const items = document.querySelectorAll(targetSelector);
      let visibleCount = 0;

      items.forEach((item) => {
        const text = (item.textContent || '').toLowerCase();
        const match = !query || text.includes(query);
        item.classList.toggle('hidden', !match);
        if (match) visibleCount += 1;
      });

      if (resultMeta) {
        resultMeta.textContent = `${visibleCount} result${visibleCount === 1 ? '' : 's'} found`;
      }

      const emptyState = document.querySelector('.empty-state');
      if (emptyState) {
        emptyState.classList.toggle('is-visible', visibleCount === 0);
      }
    });
  });
}
