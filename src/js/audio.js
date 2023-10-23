import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const audioPlayer = document.querySelector('#audio');
const audioBtn = document.querySelector('.controls');

audioBtn.addEventListener('click', handleClickAudio);

function handleClickAudio(e) {
  audioBtn.classList.toggle('muted');
  if (audioBtn.classList.contains('muted')) {
    getSoundAndFadeAudio();
  }

  if (!audioBtn.classList.contains('muted')) {
    audioPlayer.play();
    audioPlayer.volume = 1;
  }
}

addEventListener('DOMContentLoaded', () => {
  let startPlayPromise = audioPlayer.play();

  if (startPlayPromise !== undefined) {
    startPlayPromise
      .then(() => {
        audioBtn.classList.remove('muted');
      })
      .catch(error => {
        audioBtn.classList.add('muted');
        if (error.name === 'NotAllowedError') {
          // console.log('autoplay audio is not aloowed');
          setTimeout(() => {
            Confirm.show(
              'Welcome to Our Site',
              'Do you want to play background atmosphere?',
              'Yes',
              'No',
              () => {
                audioPlayer.play();
                audioBtn.classList.remove('muted');
              },
              () => audioPlayer.pause(),

             
            );
          }, 5000);
        }
      });
  }
});

function getSoundAndFadeAudio() {
  let fadePoint = 0.2;

  const fadeAudio = setInterval(function () {
    if (audioPlayer.currentTime >= fadePoint && audioPlayer.volume > 0.1) {
      audioPlayer.volume -= 0.1;
    } else {
      clearInterval(fadeAudio);
      audioPlayer.pause();
    }
  }, 200);
}
