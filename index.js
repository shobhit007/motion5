const navButton = document.querySelector(".hamburger-button");
const nav = document.querySelector(".secondary-navbar");

navButton.addEventListener("click", function () {
  const collapse = nav.classList.contains("show");
  if (!collapse) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
});
