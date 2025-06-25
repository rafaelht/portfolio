// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
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

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[data-key="subject_placeholder"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        this.reset();
    });
}

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-content, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    // Store the original HTML structure
    const originalHTML = element.innerHTML;
    
    // Extract just the text content without HTML tags
    const textContent = element.textContent || element.innerText;
    
    // Clear the element
    element.innerHTML = '';
    
    let i = 0;
    
    function type() {
        if (i < textContent.length) {
            // Reconstruct the HTML with the current text
            const currentText = textContent.substring(0, i + 1);
            
            // Replace the text content while preserving the HTML structure
            if (originalHTML.includes('<span class="highlight">')) {
                const nameStart = originalHTML.indexOf('<span class="highlight">') + '<span class="highlight">'.length;
                const nameEnd = originalHTML.indexOf('</span>');
                const beforeName = originalHTML.substring(0, originalHTML.indexOf('<span class="highlight">'));
                const afterName = originalHTML.substring(nameEnd + '</span>'.length);
                
                // Find where the name starts in the text
                const nameInText = originalHTML.match(/<span class="highlight">(.*?)<\/span>/)[1];
                const nameStartInText = textContent.indexOf(nameInText);
                
                if (i < nameStartInText) {
                    // Before the name
                    element.innerHTML = currentText;
                } else if (i >= nameStartInText && i < nameStartInText + nameInText.length) {
                    // During the name
                    const nameProgress = currentText.substring(nameStartInText);
                    element.innerHTML = beforeName + '<span class="highlight">' + nameProgress + '</span>' + afterName;
                } else {
                    // After the name
                    element.innerHTML = beforeName + '<span class="highlight">' + nameInText + '</span>' + currentText.substring(nameStartInText + nameInText.length);
                }
            } else {
                // Simple case without spans
                element.innerHTML = currentText;
            }
            
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            typeWriter(heroTitle, '', 50);
        }, 500);
    }
});

// Skills animation on hover
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px)';
        this.style.boxShadow = '0 25px 35px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        statsObserver.observe(aboutStats);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Update current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Language switching functionality
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'es'; // Default language

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        
        // Update active button
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update all translatable elements
        updateLanguage(lang);
    });
});

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        currentLang = savedLanguage;
        
        // Update active button
        langButtons.forEach(b => b.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-lang="${savedLanguage}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        // Update all content
        updateLanguage(savedLanguage);
    }
});

function updateLanguage(lang) {
    // Update all elements with data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });

    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const esText = link.getAttribute('data-es');
        const enText = link.getAttribute('data-en');
        if (lang === 'es' && esText) {
            link.textContent = esText;
        } else if (lang === 'en' && enText) {
            link.textContent = enText;
        }
    });

    // Update placeholders
    const inputs = document.querySelectorAll('input[data-key], textarea[data-key]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            input.placeholder = translations[key][lang];
        }
    });

    // Update hero section specifically
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && translations.hero_greeting && translations.hero_greeting[lang]) {
        const greeting = translations.hero_greeting[lang];
        heroTitle.innerHTML = `${greeting} <span class="highlight">Rafael Hilario</span>`;
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && translations.hero_title && translations.hero_title[lang]) {
        heroSubtitle.textContent = translations.hero_title[lang];
    }

    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription && translations.hero_description && translations.hero_description[lang]) {
        heroDescription.textContent = translations.hero_description[lang];
    }

    // Update hero buttons
    const viewProjectsBtn = document.querySelector('.hero-buttons .btn-primary');
    if (viewProjectsBtn && translations.view_projects && translations.view_projects[lang]) {
        viewProjectsBtn.textContent = translations.view_projects[lang];
    }

    const contactBtn = document.querySelector('.hero-buttons .btn-secondary');
    if (contactBtn && translations.contact_me && translations.contact_me[lang]) {
        contactBtn.textContent = translations.contact_me[lang];
    }

    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
}); 