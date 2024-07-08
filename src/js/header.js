// Додаємо обробник подій для кліку на пункт меню
const menu = document.querySelector('.menu');
const dropdown = document.querySelector('.dropdown');

menu.addEventListener('click', function () {
    dropdown.classList.toggle('show'); 
});

dropdown.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        dropdown.classList.remove('show'); 
        
        // Додаємо плавний скролінг до секції
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Для мобільного меню
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

burgerMenu.addEventListener('click', function() {
    mobileMenu.style.display = 'flex';
});

closeIcon.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
});

mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        mobileMenu.style.display = 'none';
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//  для кнопки "Order the project" в мобільному меню
const orderBtnMobile = document.querySelector('.order-btn-mobile');

orderBtnMobile.addEventListener('click', function(event) {
    mobileMenu.style.display = 'none';
    
    const targetElement = document.getElementById('work-together');
    if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});

// Закриття мобільного меню при зміні розміру вікна
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        mobileMenu.style.display = 'none';
    }
});