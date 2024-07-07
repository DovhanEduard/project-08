import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-list-item');
  const faqList = document.getElementsByClassName('faq-list');

  console.log(faqList);

  const accordion = new Accordion('.faq-list', {
    duration: 400,
    showMultiple: true,
    onOpen: function (currentElement) {
      console.log(currentElement);
    },
  });

  console.log('accordion', accordion);

  accordion.onOpen(element => console.log('openedElement', element));

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-list-text');

    // Спочатку приховуємо всі відповіді
    content.style.display = 'none';

    button.addEventListener('click', () => {
      console.log('click button');
      const isActive = item.classList.contains('active');

      // Закриваємо всі інші елементи
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-list-text').style.display = 'none';
          otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
      });

      // Перемикаємо стан поточного елемента
      if (isActive) {
        item.classList.remove('active');
        content.style.display = 'none';
        item.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
      } else {
        item.classList.add('active');
        content.style.display = 'block';
        item.querySelector('.faq-icon').style.transform = 'rotate(180deg)';
      }
    });
  });
});
