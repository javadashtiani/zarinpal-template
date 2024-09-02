const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenuBtn = document.querySelector(".closemenu-btn");
const showInMobile = document.querySelector(".show-in-mobile");
const showInMobileCrossIcon = document.querySelector(
  "#show-in-mobile-crossicon"
);
hamburgerMenuIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("hamburger-menu-show");
});
closeMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hamburger-menu-show");
});

