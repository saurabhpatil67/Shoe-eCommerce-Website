const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const icon = document.querySelector("#hamburger i");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("mobile-list-action");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});
