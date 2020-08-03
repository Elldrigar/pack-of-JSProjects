const toggleSwitch = document.querySelector('.theme-switch__input');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const imageOne = document.getElementById('image-1');
const imageTwo = document.getElementById('image-2');
const imageThree = document.getElementById('image-3');
const textBox = document.querySelector('.text__box');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme);
