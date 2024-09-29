const testimonialsSlider = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
})

const burgerBtn = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header__mobile-menu')

burgerBtn.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('active')
    if (burgerMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
})
