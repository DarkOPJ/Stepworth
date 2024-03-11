// This is for the side menu
const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav_side_menu = document.querySelectorAll('.nav-side');

open_btn.addEventListener('click', () => {
    nav_side_menu.forEach(nav_el => nav_el.classList.add('side-menu-visible'));
});
close_btn.addEventListener('click', () => {
    nav_side_menu.forEach(nav_el => nav_el.classList.remove('side-menu-visible'));
});
//