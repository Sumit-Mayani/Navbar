window.onload = function () {
    "use strict";

    const menu_btn = document.querySelector('.main__header .humburger');
    const mobile_nav = document.querySelector('.mobile__nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
    })

};