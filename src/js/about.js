import Swiper from 'swiper';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {

    const accordionTriggers = document.querySelectorAll('.ac-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const parent = trigger.closest('.ac-item');
            const panel = parent.querySelector('.ac-panel');

            if (panel.style.display === 'block') {
                panel.style.display = 'none';
                trigger.querySelector('.icon-arrow use').setAttribute('href', './img/icons/sprite.svg#icon-arrow-down');
            } else {
                document.querySelectorAll('.ac-panel').forEach(p => p.style.display = 'none');
                panel.style.display = 'block';
                trigger.querySelector('.icon-arrow use').setAttribute('href', './img/icons/sprite.svg#icon-arrow-up');
            }
        });
    });

    
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
});


