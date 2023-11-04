const navigationMenu = document.querySelector('#navigation-menu');
const responsiveMenu = document.querySelector('.responsive-menu');
const responsiveBar = document.querySelector('.responsive-menu_bars');
const responsiveNav = document.querySelector('#navigation-menu');
const menuAnchors = document.querySelectorAll('.navigation-menu_anchor');
responsiveMenu.addEventListener('click', deployMenu);

for (anchor of menuAnchors) {
    anchor.addEventListener('click', withdrawMenu);
}

counter = 0;

function deployMenu () {
    if (counter == 0) {
        responsiveMenu.classList.add('displayed-responsive-menu');
        responsiveBar.classList.add('cross');
        responsiveNav.classList.add('displayed-nav-menu');
        for (anchor of menuAnchors) {
            anchor.classList.add('displayed-nav-anchor');
        }
        counter++;
    } else if (counter == 1) {
        responsiveMenu.classList.remove('displayed-responsive-menu');
        responsiveBar.classList.remove('cross');
        responsiveNav.classList.remove('displayed-nav-menu');
        for (anchor of menuAnchors) {
            anchor.classList.remove('displayed-nav-anchor');
        }
        counter--;
    }
}

function withdrawMenu () {
    deployMenu();
}