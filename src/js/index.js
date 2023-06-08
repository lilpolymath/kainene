import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smartphone: {
    smooth: true,
  },
  smoothMobile: true,
});
