import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  // smartphone: {
  //   smooth: true,
  // },
  // smoothMobile: true,
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
