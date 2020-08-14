const inputContainer = document.getElementById('container-input');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date');

// SET DATE INPUT MIN WITH TODAY'S DATE
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// TAKE VALUES FROM FORM INPUT
function updateCountdown(event) {
  event.preventDefault();
  console.log(event);
}

// EVENT LISTENERS
countdownForm.addEventListener('submit', updateCountdown);
