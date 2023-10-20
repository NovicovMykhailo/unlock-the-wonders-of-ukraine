const audioPlayer = document.querySelector('#audio');
const audioBtn = document.querySelector('.controls');

audioBtn.addEventListener('click', handleClickAudio);

function handleClickAudio(e) {
audioBtn.classList.toggle('muted')
  if (audioBtn.classList.contains('muted')) {
    getSoundAndFadeAudio();
    

  } else {
    audioPlayer.play();
    audioPlayer.volume=1
  }
}

addEventListener('DOMContentLoaded', () => audioPlayer.play());

function getSoundAndFadeAudio() {
  let fadePoint = 0.2;

  const fadeAudio = setInterval(function () {
    if (audioPlayer.currentTime >= fadePoint && audioPlayer.volume > 0.1) {
      console.log('fadeAudio ->  audioPlayer.volume', audioPlayer.volume);
      audioPlayer.volume -= 0.1;
    } else {
      clearInterval(fadeAudio);
      audioPlayer.pause();
    }
  }, 200);
}
