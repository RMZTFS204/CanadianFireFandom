document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".main-nav");

    // Safety check
    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");

        // Toggle icon
        burger.textContent = isOpen ? "✖" : "☰";

        // Toggle rotation style (optional visual)
        burger.classList.toggle("open");

        // Lock/unlock scrolling
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    });

    // OPTIONAL: Close menu when clicking a link (mobile UX improvement)
    const navLinks = document.querySelectorAll(".nav-btn");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            burger.textContent = "☰";
            burger.classList.remove("open");
            document.body.style.overflow = "auto";
        });
    });

    // OPTIONAL: Close menu if screen resized to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1100) {
            nav.classList.remove("open");
            burger.textContent = "☰";
            burger.classList.remove("open");
            document.body.style.overflow = "auto";
        }
    });
});