document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        let delay = 0;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a staggered delay before the animation starts
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.classList.add('start-animation');

                delay += 0.2; // Increase delay for the next element
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
});