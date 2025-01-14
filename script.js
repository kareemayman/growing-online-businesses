const burgerIcon = document.querySelector('header .burger-icon')
const mobileMenu = document.querySelector('.mobile-menu')

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