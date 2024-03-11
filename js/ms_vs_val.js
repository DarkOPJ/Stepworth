// This is for the mission, vision and the values of the company in the 3rd outer of the homepage
const btnElList = document.querySelectorAll('.mvv');
btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.selected')?.classList.remove('selected')
        btnEl.classList.add('selected');
        console.log("color change")
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