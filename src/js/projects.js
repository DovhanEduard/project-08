import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

document.addEventListener('DOMContentLoaded', () => {
  const leftBtn = document.querySelector('.swiper-btn-left');
  const rightBtn = document.querySelector('.swiper-btn-right');

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
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

    on: {
      slideChange: function () {
        updateArrowState(this);
      },
    },
  });

  leftBtn.addEventListener('click', () => {
    swiper.slidePrev();
  });

  rightBtn.addEventListener('click', () => {
    swiper.slideNext();
  });

  // rightBtn.addEventListener('click', () => {
  //   if (swiper.activeIndex === 0) {
  //     swiper.slideTo(1);
  //   } else {
  //     swiper.slideNext();
  //   }
  // });

  function updateArrowState(swiper) {
    leftBtn.disabled = swiper.isBeginning;
    rightBtn.disabled = swiper.isEnd;
  }

  updateArrowState(swiper);
});
