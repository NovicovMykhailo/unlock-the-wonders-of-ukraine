import requestMail from './Email';
import { Email } from './smtp';
import Notiflix from 'notiflix';


const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (
    e.target.children[0].children.hoverla !== '' ||
    e.target.children[1].children.skiBukovel !== '' ||
    e.target.children[2].children.weekInCarpatians !== ''
  ) {
     Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'mikenovicov@gmail.com',
      Password: '2FBFB5B5CE882236870128C69FD7EA81C786',
      To: 'mikenovicov@gmail.com',
      From: 'mikenovicov@gmail.com',
      Subject: 'Request Email from Unlock Ukraine site',
      Body: requestMail(e.target),
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
    modalForm?.addEventListener('click', handleClick);
    toggleChackboxes();
    Notiflix.Notify.info('Please select a tour');
  }
}

function toggleChackboxes() {

  modalForm.children[2].children[1].classList.toggle('invalid');
  modalForm.children[3].children[1].classList.toggle('invalid');
  modalForm.children[4].children[1].classList.toggle('invalid');
}

function handleClick(e) {
  if ( e.target.type === 'checkbox'
  ) {
    modalForm.removeEventListener('click', handleClick);
    toggleChackboxes(e);
  } else {
    return;
  }
}