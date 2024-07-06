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
    
const swiper = new Swiper('.swiper', {
        
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2, 
    spaceBetween: 10,
            
    navigation: {
         nextEl: '.swiper-button-next',
            
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        invert: false,
     },
        
});



