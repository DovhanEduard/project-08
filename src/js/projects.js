// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     on: {
//       init: function () {
//         updateArrowState(this);
//       },
//       slideChange: function () {
//         updateArrowState(this);
//       },
//     },
//   });

//   function updateArrowState(swiper) {
//     const prevButton = document.querySelector('.swiper-button-prev');
//     const nextButton = document.querySelector('.swiper-button-next');

//     prevButton.disabled = swiper.isBeginning;
//     nextButton.disabled = swiper.isEnd;
//   }
// });

import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const leftBtn = document.querySelector('.swiper-btn-left');
  const rightBtn = document.querySelector('.swiper-btn-right');

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: rightBtn,
      prevEl: leftBtn,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 1,
      },
    },
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

  function updateArrowState(swiper) {
    leftBtn.disabled = swiper.isBeginning;
    rightBtn.disabled = swiper.isEnd;
  }

  updateArrowState(swiper);
});
