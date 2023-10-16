import Swiper from 'swiper'; // https://swiperjs.com/get-started

const next = document.querySelector('.review-next');
const prev = document.querySelector('.review-prev');

const reviewSwiper = new Swiper('.reviewSwiper', {
  spaceBetween: 30,
  effect: 'fade',
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    835: {
      cssWidthAndHeight: true,
      slidesPerView: 'auto',
      freeMode: true,
      visibilityFullFit: true,
      autoResize: false,
      spaceBetween: 32,
    }
  },
  on: {
    slideChange: () => handleInactive(),
    init: () => navigation(),
  },
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
