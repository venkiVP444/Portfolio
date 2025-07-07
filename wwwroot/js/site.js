// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (navbar && window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else if (navbar) {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            const icon = this.querySelector('i');

            mobileMenu.classList.toggle('hidden');

            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars h-6 w-6';
            } else {
                icon.className = 'fas fa-times h-6 w-6';
            }
        });
    }

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function () {
            if (mobileMenu && mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');

                mobileMenu.classList.add('hidden');
                if (icon) {
                    icon.className = 'fas fa-bars h-6 w-6';
                }
            }
        });
    });

    // Smooth scrolling for anchor links - Fixed version
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#" or empty
            if (!href || href === '#' || href.length <= 1) {
                return;
            }

            try {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    // Use a more compatible scrolling method
                    const targetPosition = target.offsetTop - 80; // Account for fixed navbar

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.warn('Smooth scroll error for:', href, error);
                // Fallback to default behavior
                window.location.hash = href;
            }
        });
    });

    // Toggle project features

    document.querySelectorAll('.toggle-features').forEach(button => {
            button.addEventListener('click', function () {
                const targetId = this.getAttribute('data-target');
                const featuresContent = document.getElementById(targetId);
                const chevron = this.querySelector('.fa-chevron-down, .fa-chevron-up');
                const text = this.querySelector('span');

                if (featuresContent && chevron && text) {
                    const isCollapsed = featuresContent.classList.contains('max-h-0');

                    if (isCollapsed) {
                        featuresContent.classList.remove('max-h-0', 'overflow-hidden');
                        featuresContent.style.maxHeight = featuresContent.scrollHeight + 'px';

                        chevron.classList.remove('fa-chevron-down');
                        chevron.classList.add('fa-chevron-up', 'rotate-180');
                        text.textContent = 'Hide Features';
                    } else {
                        featuresContent.style.maxHeight = featuresContent.scrollHeight + 'px';
                        void featuresContent.offsetWidth; 

                        featuresContent.classList.add('max-h-0', 'overflow-hidden');
                        featuresContent.style.maxHeight = '';

                        chevron.classList.remove('fa-chevron-up', 'rotate-180');
                        chevron.classList.add('fa-chevron-down');
                        text.textContent = 'View Features';
                    }
                }
            });
    });

    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function () {
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.bg-gray-800\\/50, .group');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

window.addEventListener('load', function () {
    console.log('Portfolio page loaded successfully');
});