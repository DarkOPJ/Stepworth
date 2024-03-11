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