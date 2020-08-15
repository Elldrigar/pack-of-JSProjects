const inputContainer = document.getElementById('container-input');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date');

const countdownElement = document.getElementById('countdown');
const countdownElementTitle = document.getElementById('countdown-title');
const countdownResetButton = document.getElementById('button-countdownReset');
const countdownTimeElements = document.querySelectorAll('.timeValue');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// SET DATE INPUT MIN WITH TODAY'S DATE
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// POPULATE COUNTDOWN
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    countdownElementTitle.textContent = `${countdownTitle} za:`;
    countdownTimeElements[0].textContent = `${days}`;
    countdownTimeElements[1].textContent = `${hours}`;
    countdownTimeElements[2].textContent = `${minutes}`;
    countdownTimeElements[3].textContent = `${seconds}`;

    // HIDE INPUT CONTAINER,SHOW COUNTDOWN CONTAINER
    inputContainer.hidden = true;
    countdownElement.hidden = false;
  }, second);
}

// TAKE VALUES FROM FORM INPUT
function updateCountdown(event) {
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;
  countdownValue = new Date(countdownDate).getTime();
  updateDOM();
}

// RESET COUNTDOWN
function resetCountdown() {
  countdownElement.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countdownActive);
  countdownTitle = '';
  countdownDate = '';
}

// EVENT LISTENERS
countdownForm.addEventListener('submit', updateCountdown);
countdownResetButton.addEventListener('click', resetCountdown);
