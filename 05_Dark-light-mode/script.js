const toggleSwitch = document.querySelector('.theme-switch__input');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme);
