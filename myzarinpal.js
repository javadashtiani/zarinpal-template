const showInMobileCrossIcon = document.getElementById(
  "show-in-mobile-crossicon"
);
const showInMobile = document.querySelector(".show-in-mobile");
showInMobileCrossIcon.addEventListener("click", () => {
  showInMobile.style.display = "none";
});
