document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic form validation/data gathering
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            console.log('Form submitted:', { name, email, message });

            // Show a success message
            alert(`Thank you, ${name}! Your message has been sent successfully.`);

            // Clear the form
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links (if scroll-behavior: smooth isn't supported)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
