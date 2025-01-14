const burgerIcon = document.querySelector('header .burger-icon')
const mobileMenu = document.querySelector('.mobile-menu')

const heroSection = document.querySelector('main .hero')
const scrollToTopButton = document.querySelector('.scroll-to-top')

document.addEventListener('click', e => {

    // Show or Hide Menu When Clicking On Burger Icon Or Mobile Menu Links
    if (e.target.matches('header i')) {

        burgerIcon.classList.toggle('rotate')
        mobileMenu.classList.toggle('show-mobile-menu')
        document.body.classList.toggle('disable-scrolling')
        
    } else if (e.target.matches('.mobile-menu a') || e.target.matches('.mobile-menu a span') || e.target.matches('.mobile-menu a i')) {

        burgerIcon.classList.toggle('rotate')
        mobileMenu.classList.remove('show-mobile-menu')
        document.body.classList.remove('disable-scrolling')
    }
})

// Event For Showing Tracking Scroll Position & Showing Scroll-To-Top Button
document.addEventListener('scroll', e => {

    let scrollPos = window.scrollY

    if (scrollPos >= (heroSection.offsetTop)) {
        scrollToTopButton.classList.add('show-scroll-button')
    } else {
        scrollToTopButton.classList.remove('show-scroll-button')
    }
})

// Scroll Button Click Event
scrollToTopButton.addEventListener('click', e => {

    window.scroll({
        top: 0,
        behavior: "smooth",
    })
})