function initForms() {
  const contactForm = document.querySelector('#contact-form');
  const partnershipForm = document.querySelector('#partnership-form');

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const showError = (field, message) => {
    const errorNode = field.closest('.form-field')?.querySelector('.form-error');
    if (errorNode) errorNode.textContent = message;
  };

  const clearError = (field) => {
    const errorNode = field.closest('.form-field')?.querySelector('.form-error');
    if (errorNode) errorNode.textContent = '';
  };

  const handleSubmit = (form, successSelector) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let valid = true;
      const fields = form.querySelectorAll('[required]');

      fields.forEach((field) => {
        const value = field.value.trim();
        clearError(field);

        if (!value) {
          showError(field, 'This field is required.');
          valid = false;
        } else if (field.type === 'email' && !validateEmail(value)) {
          showError(field, 'Please enter a valid email address.');
          valid = false;
        }
      });

      if (!valid) return;

      const successState = form.querySelector(successSelector);
      if (successState) {
        successState.classList.add('is-visible');
      }
      form.reset();
    });
  };

  if (contactForm) handleSubmit(contactForm, '.success-state');
  if (partnershipForm) handleSubmit(partnershipForm, '.success-state');
}
