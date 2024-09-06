function saveForm() {
    const formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function loadForm() {
    const savedData = localStorage.getItem('feedback-form-state');
    
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        document.querySelector('input[name="email"]').value = email || '';
        document.querySelector('textarea[name="message"]').value = message || '';
    }

    document.querySelector('.feedback-form').addEventListener('input', saveForm);
    window.addEventListener('load', loadForm);
    document.querySelector('feedback-form').addEventListener('submit', () => {
        localStorage.removeItem('feedback-form-state');
    })
};