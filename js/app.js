const loading = document.querySelector(".lazy-loading");
const body = document.querySelector("body");
window.addEventListener("load", function () {
  loading.style.display = "none";
  body.style.overflow = "auto";
});

// CV form preview and download
const link =
  "https://drive.google.com/file/d/1phvMc4lwAnp4-tiboyupRoXfi7pQWrev/view?usp=sharing";

function downloadCV() {
  location.href = link;
  // console.log('hello')
}

// Get the button
const backToTop = document.getElementById("backToTop");

// Show button when user scrolls down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
};

// Scroll smoothly to top when clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// navbar animation when home page is scrolled
window.addEventListener("scroll", function () {
  if (this.scrollY < $("#home").height()) {
    $("#navbar-section").css({
      position: "relative",
      animation: "none",
    });
  } else if (this.scrollY >= $("#home").height()) {
    $("#navbar-section").css({
      position: "sticky",
      top: 0,
      animation: "Navbar .5s ease-in",
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const selectTyped = document.querySelector(".typed");
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
});

const icon_btn = document.querySelector(".icon-btn");
function animatedButton() {
  if (icon_btn.classList.contains("icon-btn-active")) {
    icon_btn.classList.remove("icon-btn-active");
  } else {
    icon_btn.classList.add("icon-btn-active");
  }
}
icon_btn.onclick = animatedButton;

// Theme Changing
$(document).ready(function () {
  let bol = true;

  $(".switch").click(function () {
    // console.log('hello')

    $(".theme").toggleClass("bg-dark text-light");
    $("hr").toggleClass("hr-dark");
    $("nav").toggleClass("navbar-dark");
    $(".hobby").toggleClass("section-dark");
    $(".skills").toggleClass("section-dark");
    $(".about-img-container").toggleClass("section-dark");
    // $('.see-more').toggleClass('bg-dark');
    $(".content").toggleClass("text-white-50");
    $(".content").toggleClass("text-black-50");
    $(".social-medias").toggleClass("text-white");

    if (bol) {
      bol = false;
      $(".switch img").attr("src", "photos/sun.svg");
    } else {
      bol = true;
      $(".switch img").attr("src", "photos/moon-white.svg");
    }
  });
});

// Scroll Reveal Animation

ScrollReveal({
  // reset: true,
  distance: "30px",
  duration: 2000,
  delay: 400,
});

//
ScrollReveal().reveal("#navbar-section", {
  delay: 500,
  origin: "top",
  interval: 200,
});

// social medias
ScrollReveal().reveal(".social-medias", {
  delay: 500,
  origin: "right",
  interval: "200",
});

// profile
ScrollReveal().reveal(".profile", { delay: 300 });

//Name and others
ScrollReveal().reveal(".myname, .zeembi", {
  delay: 500,
  origin: "right",
  interval: "200",
});
ScrollReveal().reveal(".name, .web-developer", { delay: 600, origin: "left" });
ScrollReveal().reveal(".contacts, .see-more", {
  delay: 700,
  origin: "bottom",
  interval: "200",
});
ScrollReveal().reveal(".contacts-span, .seemore-span", {
  delay: 700,
  origin: "bottom",
  interval: "200",
});

// Hobby Section
ScrollReveal().reveal(".hobby p", { delay: 300, origin: "left" });
ScrollReveal().reveal(".hobby-items", {
  delay: 400,
  origin: "bottom",
  interval: "200",
});

// About Section
ScrollReveal().reveal(".about h4", { delay: 300, origin: "left" });
ScrollReveal().reveal(".about-content", { delay: 400, origin: "bottom" });
ScrollReveal().reveal(".about-contacts i", {
  delay: 400,
  origin: "left",
  interval: "200",
});
ScrollReveal().reveal(".about-contacts span", {
  delay: 600,
  origin: "bottom",
  interval: "200",
});

// Skills and Education Section
ScrollReveal().reveal(".skill-lefts", {
  delay: 300,
  origin: "left",
  interval: "150",
});
ScrollReveal().reveal(".skill-bottoms", {
  delay: 400,
  origin: "bottom",
  interval: "150",
});

// Projects Section
ScrollReveal().reveal(".projects h3", { delay: 300, origin: "left" });
ScrollReveal().reveal(".project-items", {
  delay: 500,
  origin: "bottom",
  interval: "150",
});
