import Swiper from 'swiper'; // https://swiperjs.com/get-started

const next = document.querySelector('.review-next');
const prev = document.querySelector('.review-prev');

const reviewSwiper = new Swiper('.reviewSwiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: false,

  breakpoints: {
    835: {
      cssWidthAndHeight: true,
      slidesPerView: 'auto',
      visibilityFullFit: true,
      autoResize: false,
      spaceBetween: 32,
      speed: 600,

    },
    1440: {
      cssWidthAndHeight: true,
      speed: 600,

    },
  },
  on: {
    slideChange: () => handleInactive(),
    init: () => navigation(),
  },
  loop: true,
});

function handleInactive() {
  reviewSwiper.isBeginning
    ? prev.classList.add('inactive')
    : prev.classList.remove('inactive');
  reviewSwiper.isEnd
    ? next.classList.add('inactive')
    : next.classList.remove('inactive');
}

function navigation() {
  next.addEventListener('click', () => reviewSwiper.slideNext());
  prev.addEventListener('click', () => reviewSwiper.slidePrev());
}
