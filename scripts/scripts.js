const scrollToTop = document.querySelector(".scrollToTop");

// Scroll to top on click

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// Display none when window is at the top

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});

const html = document.querySelector("html");
const responsiveNavbar = document.querySelector(".responsive_navbar");
const responsiveToggle = document.querySelector(".toggle");

//solution: coment line 22
//responsiveNavbar.addEventListener("click", (e) => e.stopPropagation());

responsiveToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  responsiveNavbar.classList.toggle("show");
});

html.addEventListener("click", () => responsiveNavbar.classList.remove("show"));

const navlinks = document.querySelectorAll("nav_link");

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    responsiveNavbar.classList.remove("show");
  });
});
