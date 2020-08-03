const toggleSwitch = document.querySelector('.theme-switch__input');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const imageOne = document.getElementById('image-1');
const imageTwo = document.getElementById('image-2');
const imageThree = document.getElementById('image-3');
const textBox = document.querySelector('.text__box');

//DARK THEME
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

//LIGHT THEME
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme);
