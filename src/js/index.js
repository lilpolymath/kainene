import initSmoothScrolling from './smooth-scoll';

// initSmoothScrolling();

console.log("Hey! Let's build.");

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});
