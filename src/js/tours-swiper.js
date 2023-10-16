import Swiper from 'swiper'; // https://swiperjs.com/get-started

const next = document.querySelector('.tours-next');
const prev = document.querySelector('.tours-prev');

const swiper = new Swiper('.tourSwiper', {
  spaceBetween: 30,
  effect: 'fade',
  breakpoints: {

    1440: {
      slidesPerView: 2,
      spaceBetween: 16
    }
  },
  on: {
    slideChange: () => handleInactive(),
    init: () => navigation(),
  },
});

function handleInactive() {
  swiper.isBeginning
    ? prev.classList.add('inactive')
    : prev.classList.remove('inactive');
  swiper.isEnd
    ? next.classList.add('inactive')
    : next.classList.remove('inactive');
}

function navigation() {
  next.addEventListener('click', () => swiper.slideNext());
  prev.addEventListener('click', () => swiper.slidePrev());
}
