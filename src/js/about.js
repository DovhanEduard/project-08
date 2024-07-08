import Swiper from 'swiper';
import 'swiper/css';


import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionSettings = {
  duration: 400,
  showMultiple: true,
  onOpen: function(currentElement) {
    console.log(currentElement);
  }
};

const accordionInstance = new Accordion('.accordion-container', accordionSettings);

const initializeAccordion = () => {
    const firstItem = document.querySelector('.accordion-container .ac-item');
    if (firstItem) {
        firstItem.classList.add('active');
        const firstPanel = firstItem.querySelector('.ac-panel');
        if (firstPanel) {
            firstPanel.style.display = 'block';
        }
    }
    
    document.querySelectorAll('.accordion-container .ac-trigger').forEach(trigger => {
        trigger.addEventListener('click', function () {
            const parentItem = this.closest('.ac-item');
    
            
            if (parentItem.classList.contains('active')) {
                parentItem.classList.remove('active');
                parentItem.querySelector('.ac-panel').style.display = 'none';
            } else {
                parentItem.classList.add('active');
                parentItem.querySelector('.ac-panel').style.display = 'block';
            }

            
            if (!accordionSettings.showMultiple) {
                document.querySelectorAll('.accordion-container .ac-item').forEach(item => {
                    if (item !== parentItem && item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.querySelector('.ac-panel').style.display = 'none';
                    }
                });
            }
        });
    });
};

initializeAccordion();

document.addEventListener('DOMContentLoaded', function () {
  const rightBtn = document.querySelector('.button-next');
  const swiperAbout = new Swiper('.about-swiper', {
    navigation: {
      nextEl: '.button-next'
    
    },
    
    simulateTouch: true,
    grabCursor: true,
    slideToClickedSlide: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },

    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.about-swiper'
    },

    autoHeight: true,

    slidesPerView: 2,

    spaceBetween: 0,

    slidesPerGroup: 1,

    initialSlide: 0,

    slidesPerColumn: 1,

    loop: true,

    breakpoints: {
      
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },

    }

  });

  rightBtn.addEventListener('click', () => {
    swiperAbout.slideNext();
  });
});









