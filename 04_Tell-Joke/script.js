const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

//DISABLE/ENABLE BUTTON
function toggleButton() {
  button.disabled = !button.disabled;
}

//PASSING JOKE TO VOICERSS API
function tellMeJoke(joke) {
  VoiceRSS.speech({
    key: 'ba5da6c59560459680c25b1c59818a70', // GO TO rapidapi.org ang get your own KEY, It's Free! :)
    src: joke,
    hl: 'en-gb',
    v: 'Nancy',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

//GET JOKES FROM JOKE API
async function getJokes() {
  const apiURL =
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMeJoke(joke);
    toggleButton();
  } catch (error) {
    console.log(error);
  }
}

//EVENT LISTENERS
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
