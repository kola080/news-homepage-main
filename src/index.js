let hamburgerElement = document.getElementById("hamburger");
let menu = document.getElementById("menu");

let isHamburgerOpen = false;
hamburgerElement.addEventListener("click", () => {
  if (isHamburgerOpen === false) {
    hamburgerElement.setAttribute("src", "./assets/images/icon-menu-close.svg");
    isHamburgerOpen = true;
    menu.classList.add("flex");
    menu.classList.remove("hidden");
  } else {
    hamburgerElement.setAttribute("src", "./assets/images/icon-menu.svg");
    isHamburgerOpen = false;
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }
});
