const heroImgMobile = document.querySelector('.hero-img-container img');

function updateHeroImg() {
  if (window.innerWidth <= 900) {
    heroImgMobile.src = 'assets/images/gekko-mobile.png';
  } else {
    heroImgMobile.src = 'assets/images/gekko-img.png';
  }
}

updateHeroImg();

window.addEventListener('resize', updateHeroImg);

const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.nav-list');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navList.classList.toggle('open');
  document.documentElement.classList.toggle('no-scroll');
}