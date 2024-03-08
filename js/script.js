// This is for the navbar changing color and height after passing the 1st outer of the homepage
const navbar = document.querySelector(".navbar");
const sectionOne = document.querySelector(".outer-1");

const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries,
    sectionOneObserver
){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            navbar.classList.add("nav-active");
        }
        else{
            navbar.classList.remove("nav-active");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
//

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

// This is for the mission, vision and the values of the company in the 3rd outer of the homepage
const btnElList = document.querySelectorAll('.mvv');
btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.selected')?.classList.remove('selected')
        btnEl.classList.add('selected');
    });
});

function mission() {
    document.getElementById("mvv-words").innerHTML="Stepworth Limited has established itself as a frontrunner in the realm of fiber optics, consistently delivering top-tier solutions to meet the evolving demands of the telecommunications and data networking industries.";
}
function vision() {
    document.getElementById("mvv-words").innerHTML="To be the most trustworthy and reliable fiber optic service specialist in Africa.";
}
function values() {
    document.getElementById("mvv-words").innerHTML="At Stepworth Limited, our core values are deeply rooted in integrity, excellence, and sustainability. We are committed to delivering unparalleled fiber optic network services to our valued partners across Africa.";
}

























// //This is for the search in the navbar
// const search = document.querySelector('.search');
// const search_input = document.querySelector('.search-input');
// const search_input_btn = document.querySelector('.search-input-btn');
// // let a = false;
// search_input_btn.addEventListener('click', () => {
//     search.classList.toggle('search-active');
//     search_input.focus();
//     if(a == false){
//         search_input.focus();
//         a = true;
//     }
//     else if(a == true){
//         search_input.blur();
//         a = false;
//     }
// });

//