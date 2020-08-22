const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messagecontainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = 'Please fill out all fields!';
    message.style.color = '#db1717';
    messagecontainer.style.borderColor = '#db1717';
  }
}

function procesFormData(event) {
  event.preventDefault();
  validateForm();
}

// EVENT LISTENER
form.addEventListener('submit', procesFormData);
