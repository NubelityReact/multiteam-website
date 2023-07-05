const burguerIcon = document.querySelector("#burguer-icon");
const closeIcon = document.querySelector("#close-icon");
const body = document.querySelector("body");

function toggleMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("nav-primary--active");
  body.classList.toggle("body--active");
}

burguerIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
