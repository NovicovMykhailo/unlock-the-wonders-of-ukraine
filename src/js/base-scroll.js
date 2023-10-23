import LocomotiveScroll from 'locomotive-scroll';

export const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getSpeed: true,
  getDirection: true,
  inertia: 0.75,


});

new ResizeObserver(() => scroller.update()).observe(
  document.querySelector('[data-scroll-container]')
);

document.querySelectorAll('[data-anchor]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const anchor = e.target.attributes.href.nodeValue;
    scroller.scrollTo(anchor,{duration: 2000,});
  });
});

// setTimeout(() => {
//   scroller.update();
// }, 10);

