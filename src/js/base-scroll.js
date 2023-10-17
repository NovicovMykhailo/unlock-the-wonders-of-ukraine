const body = document.body;
const scrollWrap = document.querySelector('[data-scroll]');
const height = scrollWrap.getBoundingClientRect().height - 1;

const speed = 0.1;
let offset = 0;

body.style.height = Math.floor(height) + 'px';

function smoothScroll() {
  offset += (window.scrollY - offset) * speed;
  if (offset < 1) offset = 0;
  scrollWrap.style.transform = 'translateY(-' + offset + 'px) translateZ(0)';
  callScroll = requestAnimationFrame(smoothScroll);
}
smoothScroll();
