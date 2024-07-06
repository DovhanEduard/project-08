import Swiper from 'swiper';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionSettings = {
  duration: 400,
  showMultiple: false,
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
  const swiper = new Swiper('.about-swiper', {
    slidesPerView: 2,
    spaceBetween: 0,
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.about-swiper-button-next',
    },
    breakpoints: {
        
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
       
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });

   
  const slides = document.querySelectorAll('.about-swiper-slide');
  slides.forEach(slide => slide.classList.add('visually-hidden'));
  slides[0].classList.remove('visually-hidden');
  slides[0].classList.add('is-active');

   
  document.querySelector('.about-swiper-button-next').addEventListener('click', () => {
    slides.forEach(slide => slide.classList.add('visually-hidden'));
    const activeSlide = document.querySelector('.about-swiper-slide.swiper-slide-active');
    activeSlide.classList.remove('visually-hidden');
    activeSlide.classList.add('is-active');
  });
  
});

// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//   },
  
// });




