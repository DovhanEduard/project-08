import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionSettings = {
  duration: 400,
  showMultiple: false,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
};

const accordionInstance = new Accordion(
  '.accordion-container',
  accordionSettings
);

const initializeAccordion = () => {
  const firstItem = document.querySelector('.accordion-container .ac-item');
  if (firstItem) {
    firstItem.classList.add('active');
    const firstPanel = firstItem.querySelector('.about-panel');
    if (firstPanel) {
      firstPanel.style.display = 'block';
    }
  }

  document
    .querySelectorAll('.accordion-container .ac-trigger')
    .forEach(trigger => {
      trigger.addEventListener('click', function () {
        const parentItem = this.closest('.ac-item');

        if (parentItem.classList.contains('active')) {
          parentItem.classList.remove('active');
          parentItem.querySelector('.about-panel').style.display = 'none';
        } else {
          parentItem.classList.add('active');
          parentItem.querySelector('.about-panel').style.display = 'block';
        }

        if (!accordionSettings.showMultiple) {
          document
            .querySelectorAll('.accordion-container .ac-item')
            .forEach(item => {
              if (item !== parentItem && item.classList.contains('active')) {
                item.classList.remove('active');
                item.querySelector('.about-panel').style.display = 'none';
              }
            });
        }
      });
    });
};

initializeAccordion();

new Swiper('.about-swiper', {
  slidesPerView: 2,
  spaceBetween: 1,
  loop: true,
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    prevEl: '.button-next',
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

  // on: {
  //   slideChange: function () {
  //    // updateArrowState(this);
  //   },
  // },
});
