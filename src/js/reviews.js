import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const reviewsList = document.getElementById('reviews-list');
  const notFound = document.getElementById('not-found');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');

  let swiper;

  function updateButtonState() {
    if (!swiper) return;

    if (swiper.isBeginning) {
      leftBtn.classList.add('swiper-button-disabled');
      leftBtn.disabled = true;
    } else {
      leftBtn.classList.remove('swiper-button-disabled');
      leftBtn.disabled = false;
    }

    if (swiper.isEnd) {
      rightBtn.classList.add('swiper-button-disabled');
      rightBtn.disabled = true;
    } else {
      rightBtn.classList.remove('swiper-button-disabled');
      rightBtn.disabled = false;
    }
  }

  fetch('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => response.json())
    .then(data => {
      if (!data || data.length === 0) {
        notFound.style.display = 'block';
        return;
      }

      data.forEach(review => {
        const reviewItem = document.createElement('li');
        reviewItem.classList.add('swiper-slide');

        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        const avatar = document.createElement('img');
        avatar.src = review.avatar_url;
        avatar.alt = `${review.author}'s avatar`;

        const author = document.createElement('h3');
        author.textContent = review.author;

        const reviewText = document.createElement('p');
        reviewText.classList.add('review-text');
        reviewText.textContent = review.review;

        reviewCard.appendChild(avatar);
        reviewCard.appendChild(author);
        reviewCard.appendChild(reviewText);
        reviewItem.appendChild(reviewCard);
        reviewsList.appendChild(reviewItem);
      });

      swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.right-btn',
          prevEl: '.left-btn',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        slidesPerView: 1,
        spaceBetween: 16,
        speed: 1000,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 4,
          },
        },
        on: {
          slideChange: updateButtonState,
          init: updateButtonState,
        },
      });

      leftBtn.addEventListener('click', () => {
        if (!leftBtn.classList.contains('swiper-button-disabled')) {
          swiper.slidePrev();
        }
      });

      rightBtn.addEventListener('click', () => {
        if (!rightBtn.classList.contains('swiper-button-disabled')) {
          swiper.slideNext();
        }
      });
    })
    .catch(error => {
      alert('Error loading reviews');
      notFound.style.display = 'block';
    });
});
