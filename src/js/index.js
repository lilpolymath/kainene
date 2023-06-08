import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
// initSmoothScrolling();

console.log("Hey! Let's build.");

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});
