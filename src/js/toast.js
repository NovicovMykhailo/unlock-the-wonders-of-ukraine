import Notiflix from 'notiflix';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

Notiflix.Notify.init({
  position: 'center-top',
});

Confirm.init({
  position: 'center-top',
  fontFamily: 'Jomolhari',
  backgroundColor: '#141a1967',
  borderRadius: '4px',
  backOverlay: false,
  titleColor: '#fff',
  messageColor: '#fff',
  okButtonBackground: '#373e14',
  cancelButtonBackground: '#5A5959',
});

setTimeout(() => {
  const message = document.querySelector('.notiflix-confirm-head > div');
  if (message) {
    message.style.cssText = 'color:#fff;font-size:14px;font-family:Lato !important';
  }
}, 5100);
