document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const tabs = document.querySelectorAll('.tabs');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    let swiperSlides;
    let swiperText;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabId = tab.getAttribute('data-tab');

            tabContents.forEach(content => {
                if (content.getAttribute('data-tab-content') === tabId) {
                    content.style.display = 'block';
                    if (tabId === 'slides' && !swiperSlides) {
                        swiperSlides = new Swiper('[data-tab-content="slides"].swiper', {
                            loop: true,
                            grabCursor: true,
                            spaceBetween: 20,
                            navigation: {
                                nextEl: '.next',
                                prevEl: '.prev',
                            },
                            breakpoints: {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3
                                },
                                1024: {
                                    slidesPerView: 4
                                }
                            }
                        });
                    }
                    if (tabId === 'text' && !swiperText) {
                        swiperText = new Swiper('[data-tab-content="text"].swiper', {
                            loop: true,
                            grabCursor: true,
                            spaceBetween: 20,
                            navigation: {
                                nextEl: '.next',
                                prevEl: '.prev',
                            },
                            breakpoints: {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3
                                },
                                1024: {
                                    slidesPerView: 4
                                }
                            }
                        });
                    }
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    tabs[0].click();
});