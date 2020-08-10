const cover = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

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

// EVENT LISTENERS
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// UPDATE DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  cover.src = `cover/${song.cover}.jpeg`;
}

// ON LOAD
loadSong(songs[2]);
