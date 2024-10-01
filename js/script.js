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

const whereInput = document.querySelector('.hero__form-input--where')
const whereOptions = document.querySelectorAll('.hero__form-option')
const whereDropdown = document.querySelector('.hero__form-dropdown')
const whereContainer = document.querySelector('.hero__form-wrap--where')

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero__form-input--where')) {
        whereDropdown.classList.add('active')
        burgerMenu.classList.remove('active')
    } else if (
        !e.target.classList.contains('hero__form-input--where') &&
        !e.target.classList.contains('hero__form-option')
    ) {
        whereDropdown.classList.remove('active')
    }
})

whereOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
        whereInput.value = option.innerText
        whereDropdown.classList.remove('active')
    })
})

const expandBtn = document.querySelector('.faq__all')
const faqContainer = document.querySelector('.faq__items')
const faqItems = document.querySelectorAll('.faq__item')

let initialHeight = faqContainer.offsetHeight + 1

let closedHeight =
    window.innerWidth >= 1201
        ? faqItems[0].offsetHeight + faqItems[2].offsetHeight + 21
        : faqItems[0].offsetHeight + faqItems[1].offsetHeight + 21

faqContainer.style.height = `${closedHeight}px`

expandBtn.addEventListener('click', (e) => {
    faqContainer.style.height = `${initialHeight}px`
    faqContainer.classList.add('expanded')
    expandBtn.style.display = 'none'
})
