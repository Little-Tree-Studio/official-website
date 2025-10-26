document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const backToTopButton = document.querySelector('.back-to-top');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = header.offsetHeight;
                let targetPosition = target.offsetTop - headerHeight;

                if (targetId === '#home') {
                    targetPosition = 0;
                }

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile nav on link click
                if (mainNav.classList.contains('active')) {
                    mobileNavToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            }
        });
    });

    // Mobile navigation toggle
    mobileNavToggle.addEventListener('click', () => {
        mobileNavToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-content, .product-item, .service-card').forEach(el => {
        observer.observe(el);
    });

    // Add animation classes dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .feature-content, .product-item, .service-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .feature-content.animate, .product-item.animate, .service-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Console message
    console.log('%c🌳 Welcome to Little Tree Studio!', 'color: #10B981; font-size: 20px; font-weight: bold;');
    console.log('%c创新软件，自由创造', 'color: #047857; font-size: 14px;');
});
