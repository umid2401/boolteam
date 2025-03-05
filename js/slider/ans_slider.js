const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
});