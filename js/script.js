/**
 * Aleximitation - Global Scripts
 * Handling navigation, mobile menu, and scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // 1. Header Scroll Effect
    // Adds a background color or changes style when scrolled
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 2. Mobile Menu Toggle
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';

            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('is-active');

            // Toggle hamburger icon animation class if needed
            mobileToggle.classList.toggle('is-open');

            // Prevent body scroll when menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });
    }

    // 3. Close Mobile Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            if (mobileNav.classList.contains('is-active')) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileNav.classList.remove('is-active');
                mobileToggle.classList.remove('is-open');
                document.body.style.overflow = '';
            }
        });
    });

    // 4. Smooth Scrolling Logic (Optional enhancement for older browsers)
    // Most modern browsers handle this via CSS scroll-behavior: smooth
});
