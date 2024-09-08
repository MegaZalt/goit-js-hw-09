function saveForm() {
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadForm() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const { email, message } = JSON.parse(savedData);

    document.querySelector('input[name="email"]').value = email || '';
    document.querySelector('textarea[name="message"]').value = message || '';
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  if (!email || !message) {
    return;
  }

  console.log('Form data', { email, message });

  localStorage.removeItem('feedback-form-state');
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  loadForm();
  document.querySelector('.feedback-form').addEventListener('input', saveForm);
  document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);
});
