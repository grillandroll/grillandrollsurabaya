const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");

// Buka/Tutup Menu Mobile
const toggleMenu = () => {
    document.body.classList.toggle("show-mobile-menu");
};

menuOpenButton.addEventListener("click", toggleMenu);
menuCloseButton.addEventListener("click", toggleMenu);

// Tutup menu otomatis saat link diklik
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (document.body.classList.contains("show-mobile-menu")) {
            toggleMenu();
        }
    });
});