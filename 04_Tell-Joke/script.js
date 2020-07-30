const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// function test() {
//   VoiceRSS.speech({
//     key: 'ba5da6c59560459680c25b1c59818a70',
//     src: 'Hello World',
//     hl: 'en-gb',
//     v: 'Nancy',
//     r: 0,
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false,
//   });
// }

// test();

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
    console.log(joke);
  } catch (error) {
    console.log(error);
  }
}

getJokes();
