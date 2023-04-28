// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
var pageWidth = window.innerWidth;



// window.onscroll 
const addnavbarDarkOnScroll = function() {
    var top = window.scrollY;
    pageWidth = window.innerWidth;

    if(top >=100 && pageWidth >= 991) {
        header.classList.add('navbarDark');
    }
    else if(top < 100 && pageWidth >= 991) {
        header.classList.remove('navbarDark');
    } 
}

const makeHamburgerMenuDark = function() {
    pageWidth = window.innerWidth;

    if(pageWidth <= 991) {
         header.classList.add('navbarDark');
    } else if(pageWidth > 991) {
        header.classList.remove('navbarDark');
    }

}

addnavbarDarkOnScroll();
makeHamburgerMenuDark();
window.addEventListener("scroll", addnavbarDarkOnScroll);
window.addEventListener("resize", makeHamburgerMenuDark);

// Collapses hamburger menu upon click
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})