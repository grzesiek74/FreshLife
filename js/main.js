const btnBurger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const navList = document.querySelector(".nav-mobile");
const navLinks = document.querySelectorAll(".nav-link");
const navDesktop = document.querySelector(".desktop");
const moreSection = document.querySelector(".more-section");
const btnMore = document.querySelector(".view-more");

const navToggler = () => {
  navList.classList.toggle("active");

  if (navList.classList.contains("active")) {
    iconBurger.classList.remove("show");
    iconX.classList.add("show");
  } else {
    iconBurger.classList.add("show");
    iconX.classList.remove("show");
  }
};

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
  })
);

const changeNavColor = () => {
  if (window.scrollY >= 100) {
    navDesktop.classList.add("nav-bg");
  } else {
    navDesktop.classList.remove("nav-bg");
  }
};

const showMoreGallery = () => {
  moreSection.classList.toggle("more-active");
  if (moreSection.classList.contains("more-active")) {
    btnMore.textContent = "Hide";
  } else {
    btnMore.textContent = "View more";
  }
};

btnMore.addEventListener("click", showMoreGallery);
window.addEventListener("scroll", changeNavColor);
btnBurger.addEventListener("click", navToggler);
