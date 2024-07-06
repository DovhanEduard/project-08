document.addEventListener('DOMContentLoaded', () => {
    const reviewsList = document.getElementById('reviews-list');
    const notFound = document.getElementById('not-found');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    let swiper;

    function updateButtonState() {
        if (!swiper) return;

        console.log('Swiper state:', swiper.isBeginning, swiper.isEnd);

        if (swiper.isBeginning) {
            leftBtn.classList.add('swiper-button-disabled');
            leftBtn.disabled = true;
            console.log('Left button disabled');
        } else {
            leftBtn.classList.remove('swiper-button-disabled');
            leftBtn.disabled = false;
            console.log('Left button enabled');
        }

        if (swiper.isEnd) {
            rightBtn.classList.add('swiper-button-disabled');
            rightBtn.disabled = true;
            console.log('Right button disabled');
        } else {
            rightBtn.classList.remove('swiper-button-disabled');
            rightBtn.disabled = false;
            console.log('Right button enabled');
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

            swiper = new Swiper('.swiper-container', {
                navigation: {
                    nextEl: '.right-btn',
                    prevEl: '.left-btn',
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
                    slideChange: updateButtonState,
                    init: updateButtonState
                },
            });

            leftBtn.addEventListener('click', () => {
                if (!leftBtn.classList.contains('swiper-button-disabled')) {
                    swiper.slidePrev();
                    console.log('Left button clicked');
                }
            });

            rightBtn.addEventListener('click', () => {
                if (!rightBtn.classList.contains('swiper-button-disabled')) {
                    swiper.slideNext();
                    console.log('Right button clicked');
                }
            });
        })
        .catch(error => {
            alert('Error loading reviews');
            notFound.style.display = 'block';
        });
});