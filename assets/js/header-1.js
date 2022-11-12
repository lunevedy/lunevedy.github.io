// Show/hide fly-out mobile menu -->

if (document.querySelector('nav .nav-toggle')) {
  document.querySelector('nav .nav-toggle').addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
    const elHTML = document.querySelector('html');
    const elNav = document.querySelector('nav');
    const navWrapper = document.querySelector(".links-wrapper");

    if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
        elHTML.classList.remove('no-scroll');
        elNav.classList.remove('menu-on-scroll');
    }
    else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
        elHTML.classList.add('no-scroll');
        elNav.classList.add('menu-on-scroll');
    }
}




// let navToggle = document.querySelector(".nav-toggle");
// let navWrapper = document.querySelector(".links-wrapper");

// navToggle.addEventListener("click", function () {
//   if (navWrapper.classList.contains("active")) {
//       this.setAttribute("aria-expanded", "false");
//       this.setAttribute("aria-label", "menu");
//       navWrapper.classList.remove("active");
//   } else {
//       navWrapper.classList.add("active");
//       this.setAttribute("aria-label", "close menu");
//       this.setAttribute("aria-expanded", "true");
//   }
// });
