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

// EVENT LISTENERS
prevBtn.addEventListener('click', prevSong);
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
nextBtn.addEventListener('click', nextSong);

// UPDATE DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  cover.src = `cover/${song.cover}.jpeg`;
}

// ON LOAD
loadSong(songs[songIndex]);
