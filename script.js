// const hamburger = document.querySelector(".ham");
// const navMenu = document.querySelector(".nav-links");

// hamburger.addEventListener("click", function () {
//     navMenu.classList.toggle("show");
// });

const hamburger = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    nav.classList.toggle("menu-open");
    hamburger.classList.toggle("active");
});