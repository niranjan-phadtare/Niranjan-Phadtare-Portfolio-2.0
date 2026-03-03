
const reveal = () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const elementVisible = 100; // Trigger slightly earlier for a smoother feel

        if (elementTop < windowHeight - elementVisible) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("load", reveal);

window.addEventListener("scroll", reveal);
