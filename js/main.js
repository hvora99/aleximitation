/* =========================================================
   ALEXIMITATION
   Main JavaScript
========================================================= */


/* =========================================================
   1. BUSINESS CONFIGURATION
========================================================= */

// Replace this with the real Aleximitation email address later.
const BUSINESS_EMAIL = "YOUR_EMAIL@example.com";


/* =========================================================
   2. MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close menu"
                : "Open menu"
        );

    });


    // Close menu when a navigation link is clicked.
    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}


/* =========================================================
   3. ENQUIRE NOW — EMAIL
========================================================= */

const enquireButtons =
    document.querySelectorAll(".enquire-button");


enquireButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const productName =
            button.dataset.product ||
            "Keychain";


        const subject =
            `Enquiry about ${productName}`;


        const body =
`Hello Aleximitation,

I am interested in the following keychain:

Product: ${productName}

Please provide more information.

Thank you.`;


        const mailto =
            `mailto:${BUSINESS_EMAIL}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;


        window.location.href = mailto;

    });

});


/* =========================================================
   4. FAVORITE BUTTONS
========================================================= */

const favoriteButtons =
    document.querySelectorAll(".favorite-button");


favoriteButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const isFavorite =
            button.classList.toggle("favorite");


        button.textContent =
            isFavorite
                ? "♥"
                : "♡";


        button.setAttribute(
            "aria-pressed",
            isFavorite
        );

    });

});


/* =========================================================
   5. PRODUCT NAVIGATION
========================================================= */

const productsGrid =
    document.querySelector(".products-grid");

const productCards =
    document.querySelectorAll(".product-card");

const productNavigation =
    document.querySelector(".product-navigation");


if (
    productsGrid &&
    productCards.length > 0 &&
    productNavigation
) {

    const previousButton =
        productNavigation.querySelector(
            "button:first-child"
        );

    const nextButton =
        productNavigation.querySelector(
            "button:last-child"
        );


    const dots =
        productNavigation.querySelectorAll(
            ".product-dots span"
        );


    function updateProductDots() {

        if (!dots.length) {
            return;
        }


        const scrollLeft =
            productsGrid.scrollLeft;


        const cardWidth =
            productCards[0].offsetWidth;


        if (!cardWidth) {
            return;
        }


        const currentIndex =
            Math.round(
                scrollLeft /
                (cardWidth + 15)
            );


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                productsGrid.scrollBy({
                    left:
                        -productsGrid
                            .clientWidth,
                    behavior: "smooth"
                });

            }
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                productsGrid.scrollBy({
                    left:
                        productsGrid
                            .clientWidth,
                    behavior: "smooth"
                });

            }
        );

    }


    productsGrid.addEventListener(
        "scroll",
        updateProductDots
    );

}


/* =========================================================
   6. SEARCH BUTTON
========================================================= */

const searchButton =
    document.querySelector(".search-button");


if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            /*
             * Search functionality will be added later
             * when we have the complete product catalogue.
             */

            alert(
                "Product search will be available soon."
            );

        }
    );

}


/* =========================================================
   7. ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sections =
    document.querySelectorAll(
        "main section[id]"
    );


if (
    navLinks.length &&
    sections.length
) {

    const navigationObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        const currentId =
                            entry.target.id;


                        navLinks.forEach(
                            (link) => {

                                const isActive =
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${currentId}`;


                                link.classList.toggle(
                                    "active",
                                    isActive
                                );

                            }
                        );

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach((section) => {

        navigationObserver.observe(
            section
        );

    });

}


/* =========================================================
   8. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".product-card, .category-card, .contact-card"
    );


if (revealElements.length) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "is-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================================================
   9. CLOSE MOBILE MENU WITH ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Escape" ||
            !mobileMenu ||
            !mobileMenu.classList.contains("open")
        ) {
            return;
        }


        mobileMenu.classList.remove("open");


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    }
);


/* =========================================================
   10. CURRENT YEAR
========================================================= */

const currentYear =
    document.querySelector(
        ".footer-bottom"
    );


if (currentYear) {

    const yearText =
        currentYear.querySelector(
            "span"
        );


    if (yearText) {

        yearText.textContent =
            `© ${new Date().getFullYear()} Aleximitation. All rights reserved.`;

    }

}


/* =========================================================
   11. PAGE LOADED
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);

