const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
let isPlaying = false;

// PLAY
function playSong() {
  isPlaying = true;
  music.play();
}
// PAUSE
function pauseSong() {
  isPlaying = false;
  music.pause();
}

// EVENT LISTENERS
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
