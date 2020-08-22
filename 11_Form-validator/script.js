const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messagecontainer = document.querySelector('.message-container');
const message = document.getElementById('message');

function procesFormData(event) {
  event.preventDefault();
}

// EVENT LISTENER
form.addEventListener('submit', procesFormData);
