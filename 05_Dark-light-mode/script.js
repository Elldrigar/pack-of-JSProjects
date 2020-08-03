const toggleSwitch = document.querySelector('.theme-switch__input');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const imageOne = document.getElementById('image-1');
const imageTwo = document.getElementById('image-2');
const imageThree = document.getElementById('image-3');
const textBox = document.querySelector('.text__box');
const darkTheme = 'dark';
const lightTheme = 'light';
const colorBlack = 'rgb(0 0 0 / 50%)';
const colorWhite = 'rgb(255 255 255 / 50%)';

//DARK OR LIGHT IMAGES
function imageColor(color) {
  imageOne.src = `img/undraw_gaming_${color}.svg`;
  imageTwo.src = `img/undraw_camping_${color}.svg`;
  imageThree.src = `img/undraw_video_game_${color}.svg`;
}

function toggleDarkOrLight(theme) {
  nav.style.backgroundColor = theme === 'dark' ? colorBlack : colorWhite;
  textBox.style.backgroundColor = theme === 'dark' ? colorWhite : colorBlack;
  toggleIcon.children[0].textContent =
    theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  theme === 'dark'
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  theme === 'dark' ? imageColor('dark') : imageColor('light');
}

//SWITCH THEME
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkOrLight(darkTheme);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkOrLight(lightTheme);
  }
}

//CHECK LOCAL STORAGE FOR MODE
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkOrLight('darkTheme');
  }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme);
