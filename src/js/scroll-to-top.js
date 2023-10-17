const scrollToTop = document.querySelector('.arrow-up');

const amountScrolled = 200;

function handleScroll(e) {
  if (this.scrollY > amountScrolled) {
    scrollToTop.classList.remove('is-hidden');
    scrollToTop.addEventListener('click', handleClick);
  } else {
    scrollToTop.classList.add('is-hidden');
    scrollToTop.removeEventListener('click', handleClick);
  }
}

function handleClick() {
  window.scroll({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', handleScroll);
