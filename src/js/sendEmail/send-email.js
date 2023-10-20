import requestMail from './Email';
import { Email } from './smtp';
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit( e ) {
  e.preventDefault();

  if (
    e.target.children[0].children.name.value !== '' ||
    e.target.children[1].children.tel.value !== '' ||
    e.target.children[2].value !== ''
  ) {

     Email.send({
      SecureToken : "ca171e1b-44f1-47e1-ba6c-f2b417d9d714",
      Host: 'smtp.elasticemail.com',
      Username: 'mikenovicov@gmail.com',
      Password: '2FBFB5B5CE882236870128C69FD7EA81C786',
      To: 'mikenovicov@gmail.com',
      From: 'mikenovicov@gmail.com',
      Subject: 'Request Email from Unlock Ukraine site',
      Body: requestMail(e),
    }).then(message => {
    form.reset();
      if (message === 'OK') {
        Notiflix.Notify.success(
          'Thank you for contacting us, our manager will call you back as soon as possible'
        );
      } else {
        Notiflix.Notify.info(message);
      }
    });
  } else {
    Notiflix.Notify.info('Please select a tour');
  }
}