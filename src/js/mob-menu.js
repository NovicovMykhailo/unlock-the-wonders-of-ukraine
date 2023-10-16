const burgerMenuBtn = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.mobile-menu');
const nav = document.querySelectorAll("[data-nav]")


burgerMenuBtn.addEventListener('click', handleClick);

function handleClick(e) {
  document.body.classList.toggle('overflow');
  burgerMenuBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
}


nav.forEach(item => item.addEventListener('click', handleClick))