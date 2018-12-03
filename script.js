/**
 * Toggle Menu
 */

let button = document.querySelector(".menu-toggle");
let menu = document.querySelector("nav");
let show = false;

button.addEventListener("click", function() {
  console.log("clicked!");

  if (show === false) {
    menu.classList.add("show");

    show = true;
  } else {
    menu.classList.remove("show");

    show = false;
  }
});
