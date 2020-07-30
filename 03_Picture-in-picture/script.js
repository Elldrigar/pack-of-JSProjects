const videoElement = document.getElementById('video');
const startButton = document.getElementById('button');

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //ERRORS
    console.log(error);
  }
}

startButton.addEventListener('click', async () => {
  //DISABLE BUTTON
  startButton.disabled = true;
  //START PiP
  await videoElement.requestPictureInPicture();
  //RESET BUTTON
  startButton.disabled = false;
});

selectMediaStream();
