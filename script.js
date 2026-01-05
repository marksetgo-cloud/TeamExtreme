// TeamExtreme Website Scripts

// ============================================
// Countdown Timer for Next Trip
// ============================================
function initCountdown() {
    // Set the date for Sun Valley 2026 - adjust this to your actual trip date
    const tripDate = new Date('2026-01-15T00:00:00').getTime();
    
    const countdownElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes')
    };
    
    // Update countdown every minute
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = tripDate - now;
        
        if (distance < 0) {
            // Trip has passed
            if (countdownElements.days) countdownElements.days.textContent = '0';
            if (countdownElements.hours) countdownElements.hours.textContent = '0';
            if (countdownElements.minutes) countdownElements.minutes.textContent = '0';
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Update DOM
        if (countdownElements.days) countdownElements.days.textContent = days;
        if (countdownElements.hours) countdownElements.hours.textContent = hours.toString().padStart(2, '0');
        if (countdownElements.minutes) countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
    }
    
    // Initial update
    updateCountdown();
    
    // Update every minute
    setInterval(updateCountdown, 60000);
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Navigation Scroll Effect
// ============================================
function initNavScroll() {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 10) {
            nav.style.boxShadow = '0 2px 12px rgba(26, 41, 63, 0.08)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// Image Lazy Loading (for gallery pages)
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// Fade In on Scroll Animation
// ============================================
function initScrollAnimations() {
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
    
    // Add animation to sections
    document.querySelectorAll('.about-section, .next-trip-section, .editions-preview, .membership-teaser').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ============================================
// Initialize Everything on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initSmoothScroll();
    initNavScroll();
    initLazyLoading();
    initScrollAnimations();
    
    console.log('TeamExtreme: Unite in Adventure, Elevate in Elegance');
});

// ============================================
// Utility: Create placeholder images
// (You'll replace these with real images)
// ============================================
function createPlaceholderImage(width, height, text) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = '#EDEFF7';
    ctx.fillRect(0, 0, width, height);
    
    // Text
    ctx.fillStyle = '#1a293f';
    ctx.font = '20px Manrope, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    return canvas.toDataURL();
}
