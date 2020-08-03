const toggleSwitch = document.querySelector('.theme-switch__input');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const imageOne = document.getElementById('image-1');
const imageTwo = document.getElementById('image-2');
const imageThree = document.getElementById('image-3');
const textBox = document.querySelector('.text__box');

//DARK OR LIGHT IMAGES
function imageColor(color) {
  imageOne.src = `img/undraw_gaming_${color}.svg`;
  imageTwo.src = `img/undraw_camping_${color}.svg`;
  imageThree.src = `img/undraw_video_game_${color}.svg`;
}

//DARK THEME
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageColor('dark');
}

//LIGHT THEME
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageColor('light');
}

//SWITCH THEME
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

//CHECK LOCAL STORAGE FOR MODE
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme);
