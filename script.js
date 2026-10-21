const options = {
    threshold: 0.3 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const el = entry.target;
        
        if (el.classList.contains("servicec-grid") ||
            el.classList.contains("stats") ||
            el.classList.contains("estimonials")) {

            startStagger(el);
            }
        }
    });
        
}, options);

const cards = document.querySelectorAll(".service-card");

cards.forEach((card) => {
    observer.observe(card);
});