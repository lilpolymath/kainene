import LocomotiveScroll from 'locomotive-scroll';
// import { gsap } from 'gsap';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
  multiplier: 1.4, // Effect Multiplier
  reloadOnContextChange: true,
  touchMultiplier: 2,
  smoothMobile: 0,
  smartphone: {
    smooth: !0,
    breakpoint: 767,
  },
  tablet: {
    smooth: !1,
    breakpoint: 1024,
  },
});

setTimeout(() => {
  scroll.destroy();
}, 0);
setTimeout(() => {
  scroll.init();
}, 50);
setTimeout(() => {
  scroll.update();
}, 1000);

const images = [
  'https://savant.holeyfox.co/_next/image?url=%2FChatlog.png&w=640&q=75',
  'https://savant.holeyfox.co/_next/image?url=%2Ftextsummarization.png&w=640&q=75',
  'https://savant.holeyfox.co/_next/image?url=%2Fseo.png&w=640&q=75',
  'https://savant.holeyfox.co/_next/image?url=%2Fmeaning.png&w=640&q=75',
  'https://savant.holeyfox.co/_next/image?url=%2Fyomama.png&w=640&q=75',
  'https://savant.holeyfox.co/_next/image?url=%2Flullaby.png&w=640&q=75',
];
const usecasePreview = document.querySelector('.usecase__preview img');
const usecaseButtons = document.querySelectorAll('.case');

usecaseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    usecaseButtons.forEach((btn) => {
      btn.classList.remove('case--active');
    });
    button.classList.add('case--active');
    usecasePreview.src = `${images[index]}`;
  });
});
