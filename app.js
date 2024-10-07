// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Form submission handler (mockup)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});