const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function test() {
  VoiceRSS.speech({
    key: 'ba5da6c59560459680c25b1c59818a70',
    src: 'Hello World',
    hl: 'en-gb',
    v: 'Nancy',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

test();
