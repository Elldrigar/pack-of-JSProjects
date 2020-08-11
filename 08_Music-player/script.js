// PLAYER DOM
const cover = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');

// CONTROLS
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// PROGRESS BAR & TIME
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimer = document.getElementById('current-time');
const durationTime = document.getElementById('duration');

// MUSIC
const songs = [
  {
    name: 'song-1',
    displayName: 'Apex',
    artist: 'Bio Unit',
    cover: 'cover-1',
  },
  {
    name: 'song-2',
    displayName: 'Time',
    artist: 'Brevyn',
    cover: 'cover-2',
  },
  {
    name: 'song-3',
    displayName: 'Can You Kiss Me First',
    artist: 'Herr Doktor',
    cover: 'cover-3',
  },
  {
    name: 'song-4',
    displayName: 'Elipsis',
    artist: 'Had Crouch',
    cover: 'cover-4',
  },
];

let isPlaying = false;
let songIndex = 0;

// PLAY
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}
// PAUSE
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// NEXT SONG
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// PREVIOUS SONG
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// UPGRADE PROGRESS BAR & TIME
function updateProgressBarAndTime(event) {
  if (isPlaying) {
    // UPDATE PROGRESSBAR
    const { duration, currentTime } = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // CALCULATE TIME FOR DISPLAY
    const durationMinutes = Math.floor(duration / 60);
    const currentMinutes = Math.floor(currentTime / 60);
    let durationSeconds = Math.floor(duration % 60);
    let currentSeconds = Math.floor(currentTime % 60);

    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    if (durationSeconds) {
      durationTime.textContent = `${durationMinutes}:${durationSeconds}`;
      currentTimer.textContent = `${currentMinutes}:${currentSeconds}`;
    }
  }
}

// EVENT LISTENERS
prevBtn.addEventListener('click', prevSong);
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBarAndTime);

// UPDATE DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  cover.src = `cover/${song.cover}.jpeg`;
}

// ON LOAD
loadSong(songs[songIndex]);
