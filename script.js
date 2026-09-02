// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        const target = link.getAttribute("href");

        if (target === "#" + currentSection) {
            link.style.color = "#00e88a";
        }

    });

});


// ==========================================
// SIMPLE REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".project, .work-card, .skill-group, .contact-card, .timeline-row"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});