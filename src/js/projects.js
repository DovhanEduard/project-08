import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

document.addEventListener('DOMContentLoaded', () => {
  const leftBtn = document.querySelector('.swiper-btn-left');
  const rightBtn = document.querySelector('.swiper-btn-right');

  new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1000,
    modules: [Navigation, Keyboard, Mousewheel],
    navigation: {
      nextEl: rightBtn,
      prevEl: leftBtn,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: true,
  });
});
