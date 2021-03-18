let home = document.querySelector("#home");
let about = document.querySelector("#about");
let services = document.querySelector("#services");
let gallery = document.querySelector("#gallery");
let blog = document.querySelector("#blog");
let contact = document.querySelector("#contact");

window.addEventListener("scroll", () => {
  let browserWindow = window.pageYOffset;
  if (about.offsetTop <= browserWindow && services.offsetTop > browserWindow) {
    document.querySelector(".about-scroll").setAttribute("id", "active");
    document.querySelector(".services-scroll").removeAttribute("id", "active");
    document.querySelector(".gallery-scroll").removeAttribute("id", "active");
    document.querySelector(".blog-scroll").removeAttribute("id", "active");
    document.querySelector(".contact-scroll").removeAttribute("id", "active");
    document.querySelector(".home-scroll").removeAttribute("id", "active");
  } else if (
    services.offsetTop <= browserWindow &&
    gallery.offsetTop > browserWindow
  ) {
    document.querySelector(".services-scroll").setAttribute("id", "active");
    document.querySelector(".about-scroll").removeAttribute("id", "active");
    document.querySelector(".gallery-scroll").removeAttribute("id", "active");
    document.querySelector(".blog-scroll").removeAttribute("id", "active");
    document.querySelector(".contact-scroll").removeAttribute("id", "active");
    document.querySelector(".home-scroll").removeAttribute("id", "active");
  } else if (
    gallery.offsetTop <= browserWindow &&
    blog.offsetTop > browserWindow
  ) {
    document.querySelector(".gallery-scroll").setAttribute("id", "active");
    document.querySelector(".about-scroll").removeAttribute("id", "active");
    document.querySelector(".services-scroll").removeAttribute("id", "active");
    document.querySelector(".blog-scroll").removeAttribute("id", "active");
    document.querySelector(".contact-scroll").removeAttribute("id", "active");
    document.querySelector(".home-scroll").removeAttribute("id", "active");
  } else if (
    blog.offsetTop <= browserWindow &&
    contact.offsetTop > browserWindow
  ) {
    document.querySelector(".blog-scroll").setAttribute("id", "active");
    document.querySelector(".about-scroll").removeAttribute("id", "active");
    document.querySelector(".services-scroll").removeAttribute("id", "active");
    document.querySelector(".gallery-scroll").removeAttribute("id", "active");
    document.querySelector(".contact-scroll").removeAttribute("id", "active");
    document.querySelector(".home-scroll").removeAttribute("id", "active");
  } else if (contact.offsetTop <= browserWindow) {
    document.querySelector(".contact-scroll").setAttribute("id", "active");
    document.querySelector(".about-scroll").removeAttribute("id", "active");
    document.querySelector(".services-scroll").removeAttribute("id", "active");
    document.querySelector(".gallery-scroll").removeAttribute("id", "active");
    document.querySelector(".blog-scroll").removeAttribute("id", "active");
    document.querySelector(".home-scroll").removeAttribute("id", "active");
  } else {
    document.querySelector(".home-scroll").setAttribute("id", "active");
    document.querySelector(".about-scroll").removeAttribute("id", "active");
    document.querySelector(".services-scroll").removeAttribute("id", "active");
    document.querySelector(".gallery-scroll").removeAttribute("id", "active");
    document.querySelector(".blog-scroll").removeAttribute("id", "active");
    document.querySelector(".contact-scroll").removeAttribute("id", "active");
  }
});
