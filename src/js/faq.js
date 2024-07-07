import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 600,
    showMultiple: true,
    onOpen: function (currentElement) {
      currentElement.querySelector('.faq-icon').classList.add('active');
    },
    onClose: function (currentElement) {
      currentElement.querySelector('.faq-icon').classList.remove('active');
    },
  });
});
