import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

new Swiper('.about-swiper', {
  slidesPerView: 2,
  spaceBetween: 1,
  speed: 1000,
  allowSlidePrev: false,
  loop: true,
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.button-next',
  },
  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },
  mousewheel: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      width: 600,
      loop: true,
    },
    1440: {
      slidesPerView: 6,
      width: 1200,
      loop: false,
    },
  },
});
