const navigationMenu = document.querySelector('#navigation-menu');
const responsiveMenu = document.querySelector('.responsive-menu');
const responsiveBar = document.querySelector('.responsive-menu_bars');
const responsiveNav = document.querySelector('#navigation-menu');
const menuAnchors = document.querySelectorAll('.navigation-menu_anchor');
responsiveMenu.addEventListener('click', deployMenu);

for (anchor of menuAnchors) {
    anchor.addEventListener('click', deployMenu);
}

let isMenuActive = false;

function deployMenu () {
    if (isMenuActive == false) {
        responsiveMenu.classList.add('displayed-responsive-menu');
        responsiveBar.classList.add('cross');
        responsiveNav.classList.add('displayed-nav-menu');
        for (anchor of menuAnchors) {
            anchor.classList.add('displayed-nav-anchor');
        }
        isMenuActive = true;
    } else if (isMenuActive == true) {
        responsiveMenu.classList.remove('displayed-responsive-menu');
        responsiveBar.classList.remove('cross');
        responsiveNav.classList.remove('displayed-nav-menu');
        for (anchor of menuAnchors) {
            anchor.classList.remove('displayed-nav-anchor');
        }
        isMenuActive = false;
    }
    console.log(isMenuActive);
}