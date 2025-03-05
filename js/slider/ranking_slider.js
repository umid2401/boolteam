document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.ranking', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.nex',
            prevEl: '.pre',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});


