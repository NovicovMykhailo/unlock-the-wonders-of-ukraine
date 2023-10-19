import {scroller} from "./base-scroll"

const scrollToTop = document.querySelector('.arrow-up');

const amountScrolled = 260;

function handleScroll(e) {

  if (e.scroll.y > amountScrolled) {

    scrollToTop.classList.remove('is-hidden');
    scrollToTop.addEventListener('click', handleClick);
  } else {
    scrollToTop.classList.add('is-hidden');
    scrollToTop.removeEventListener('click', handleClick);
  }
}


function handleClick() {
  scroller.scrollTo("#header");
}

scroller.on('scroll',handleScroll)  