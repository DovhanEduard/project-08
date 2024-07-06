document.addEventListener('DOMContentLoaded', () => {
  const reviewsList = document.getElementById('reviews-list');
  const notFound = document.getElementById('not-found');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.nav-btn:not(.left-btn)');

  function updateButtonState(swiper) {
    if (swiper.isBeginning) {
      leftBtn.classList.add('disabled');
      leftBtn.disabled = true;
    } else {
      leftBtn.classList.remove('disabled');
      leftBtn.disabled = false;
    }

    if (swiper.isEnd) {
      rightBtn.classList.add('disabled');
      rightBtn.disabled = true;
    } else {
      rightBtn.classList.remove('disabled');
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

        const author = document.createElement('h2');
        author.textContent = review.author;

        const reviewText = document.createElement('p');
        reviewText.textContent = review.review;

        reviewCard.appendChild(avatar);
        reviewCard.appendChild(author);
        reviewCard.appendChild(reviewText);
        reviewItem.appendChild(reviewCard);
        reviewsList.appendChild(reviewItem);
      });

      const swiper = new Swiper('.swiper-container', {
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
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 4,
          },
        },
        on: {
          slideChange: () => updateButtonState(swiper),
        },
      });

      updateButtonState(swiper);

      leftBtn.addEventListener('click', () => {
        if (!leftBtn.classList.contains('disabled')) {
          swiper.slidePrev();
        }
      });

      rightBtn.addEventListener('click', () => {
        if (!rightBtn.classList.contains('disabled')) {
          swiper.slideNext();
        }
      });
    })
    .catch(error => {
      alert('Error loading reviews');
      notFound.style.display = 'block';
    });
});
