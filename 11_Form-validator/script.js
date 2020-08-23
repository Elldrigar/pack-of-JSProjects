const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messagecontainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const colorRed = '#db1717';
const colorGreen = '#0bda0b';

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = colorRed;
    messagecontainer.style.borderColor = colorRed;
    return;
  }

  if (password1Element.value === password2Element.value) {
    passwordsMatch = true;
    password1Element.style.borderColor = colorGreen;
    password2Element.style.borderColor = colorGreen;
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = colorRed;
    messagecontainer.style.borderColor = colorRed;
    password1Element.style.borderColor = colorRed;
    password2Element.style.borderColor = colorRed;
    return;
  }
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = colorGreen;
    messagecontainer.style.borderColor = colorGreen;
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  //   DO SOMETHING WITH DATA USER
  console.log(user);
}

function procesFormData(event) {
  event.preventDefault();
  validateForm();
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// EVENT LISTENER
form.addEventListener('submit', procesFormData);
