// Javascript to focus current items selected on the sidebar
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".sidebar a");
    const sections = Array.from(navLinks).map(link => {
        const id = link.getAttribute("href").slice(1);
        return document.getElementById(id);
    });

    // Highlight on scroll
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                    });
                }
            });
        },
        { rootMargin: "-10% 0px -70% 0px", threshold: 0.1 }
    );

    sections.forEach(section => {
        if (section) observer.observe(section);
    });

    // Highlight on click (keeps highlight even before scroll triggers)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});