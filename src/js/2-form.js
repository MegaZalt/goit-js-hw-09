const formData = {
  email: '',
  message: '',
};


function saveForm() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function loadForm() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formData.email = email || '';
    formData.message = message || '';

    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

function validateForm() {
  return formData.email && formData.message;
}

function handleInput(event) {
  const { name, value } = event.target;
  if (name === 'email') {
    formData.email = value;
  } else if (name === 'message') {
    formData.message = value;
  }
  saveForm();
}

function handleSubmit(event) {
  event.preventDefault();

  if (!validateForm()) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form data', formData);

  localStorage.removeItem('feedback-form-state');
  Object.keys(formData).forEach(key => formData[key] = '');
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  loadForm();
  document.querySelector('.feedback-form').addEventListener('input', handleInput);
  document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);
});

