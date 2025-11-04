// ===============================
// SCROLL TO TOP FUNCTIONALITY
// ===============================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll('.review-card, .gallery-item, .testimonial-card');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===============================
// SMOOTH NAVIGATION LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================
// FORM VALIDATION
// ===============================

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = this.querySelector('input[placeholder="Tu Nombre"]').value;
        const email = this.querySelector('input[placeholder="Tu Email"]').value;
        const mensaje = this.querySelector('textarea').value;

        // Simple validation
        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Por favor completa todos los campos');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingresa un email válido');
            return;
        }

        // Success message
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        this.reset();
    });
}

// ===============================
// NAVBAR ACTIVE STATE
// ===============================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===============================
// LAZY LOADING IMAGES
// ===============================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Simular carga de imagen
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        imageObserver.observe(img);
    });
}

// ===============================
// CAROUSEL FUNCTIONALITY (Optional)
// ===============================

const reviewsScroll = document.querySelector('.reviews-scroll');

// AUTO-SCROLL CAROUSEL
if (reviewsScroll) {
    const reviewCards = reviewsScroll.querySelectorAll('.review-card');
    const cardCount = reviewCards.length;
    const cardWidth = 350; // px (matches the flex: 0 0 350px in CSS)
    const gap = 24; // px (matches the gap: 24px in CSS)

    if (cardCount > 0) {
        // Duplicate cards for infinite scroll effect
        reviewCards.forEach(card => {
            const clone = card.cloneNode(true);
            reviewsScroll.appendChild(clone);
        });

        // Calculate total scroll distance and duration
        const totalWidth = cardCount * (cardWidth + gap);
        const scrollDuration = cardCount * 8; // 8 seconds per card

        // Set CSS custom properties for animation
        reviewsScroll.style.setProperty('--items-count', cardCount);
        reviewsScroll.style.setProperty('--scroll-duration', `${scrollDuration}s`);

        // Enable auto-scrolling
        reviewsScroll.classList.add('auto-scrolling');

        // Fix: Change from scrolling to translate-based animation
        // Reset scroll behavior
        reviewsScroll.style.scrollBehavior = 'auto';
        reviewsScroll.scrollLeft = 0;
    }
}

let scrollPosition = 0;

// ===============================
// KEYBOARD NAVIGATION
// ===============================

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({
            top: -100,
            behavior: 'smooth'
        });
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({
            top: 100,
            behavior: 'smooth'
        });
    }
});

// ===============================
// ANIMATION ON LOAD
// ===============================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';

    // Trigger animations for visible elements
    const elements = document.querySelectorAll('[class*="card"], [class*="item"]');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});

// ===============================
// SMOOTH PAGE LOAD
// ===============================

document.body.style.opacity = '0';
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// ===============================
// COUNTER ANIMATION (Optional)
// ===============================

const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                setTimeout(updateCount, 50);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });
};

// Call animation when page loads
window.addEventListener('load', animateCounters);

// ===============================
// MOBILE MENU CLOSE ON LINK CLICK
// ===============================

const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// ===============================
// ACCESSIBILITY: FOCUS MANAGEMENT
// ===============================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.style.outline = '2px solid #ffc107';
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') {
        document.body.style.outline = 'none';
    }
});

// ===============================
// PERFORMANCE OPTIMIZATION
// ===============================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event
const debouncedScroll = debounce(revealOnScroll, 100);
window.addEventListener('scroll', debouncedScroll);

// ===============================
// THEME SWITCHER (Optional)
// ===============================

const createThemeSwitcher = () => {
    const button = document.createElement('button');
    button.className = 'theme-switcher';
    button.innerHTML = '<i class="fas fa-moon"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #ffc107;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        font-size: 1.2rem;
        color: #1a1a1a;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;

    // Note: Uncomment to enable theme switcher
    // document.body.appendChild(button);
};

// createThemeSwitcher();

console.log('Peugeot Review Page - Script loaded successfully!');
