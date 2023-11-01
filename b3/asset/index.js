const navLinks = document.querySelectorAll(".navLink");
const mobileMenu = document.querySelector('.mobileMenu');

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        navLinks.forEach(function(navLink) {
            navLink.classList.remove("active");
        });

        link.classList.add("active");

        console.log(link.textContent + " link clicked");
    });
});

mobileMenu.addEventListener('click', () => {
    document.querySelector('.navbar__items').classList.toggle('mobileActive');
    document.querySelector('.navbar').classList.toggle('mobileActive');
})