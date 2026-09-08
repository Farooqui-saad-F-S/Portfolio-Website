const navLinks = document.querySelectorAll(".navigation a");
const sections = document.querySelectorAll("main section[id]");
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const target = document.querySelector(link.getAttribute("href"));

        if (!target) return;

        target.classList.remove("flash-section");
        void target.offsetWidth;
        target.classList.add("flash-section");

        setTimeout(() => {
            target.classList.remove("flash-section");
        }, 700);
    });
});

window.addEventListener("scroll", () => {
    let currentSection = "home";

    sections.forEach((section) => {
        const top = section.offsetTop - 140;

        if (window.scrollY >= top) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
    });
});
