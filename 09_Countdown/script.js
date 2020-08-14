const inputContainer = document.getElementById('container-input');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date');

let countdownTitle = '';
let countdownDate = '';

// SET DATE INPUT MIN WITH TODAY'S DATE
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// TAKE VALUES FROM FORM INPUT
function updateCountdown(event) {
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;
  console.log(countdownTitle);
  console.log(countdownDate);
}

// EVENT LISTENERS
countdownForm.addEventListener('submit', updateCountdown);
