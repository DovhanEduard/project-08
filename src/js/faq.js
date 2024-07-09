import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-accordion-container', {
    duration: 600,
    showMultiple: true,
  });
});
