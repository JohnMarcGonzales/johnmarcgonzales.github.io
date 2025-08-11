// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "Web Developer",
    "Software Engineer",
    "Cyber Security Analyst",
    "Game Developer"
];
const typingDelay = 80;
const erasingDelay = 40;
const newTextDelay = 2500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        if (typedTextSpan) typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        if (cursorSpan) cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        if (typedTextSpan) typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        if (cursorSpan) cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const rootEl = document.documentElement;

function updateThemeIcon() {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = rootEl.classList.contains('dark-theme') ? '☀️' : '🌙';
}

function setTheme(theme) {
    const enableDark = theme === 'dark';
    rootEl.classList.toggle('dark-theme', enableDark);
    try { localStorage.setItem('theme', enableDark ? 'dark' : 'light'); } catch (_) {}
    updateThemeIcon();
}

// Initialize theme from saved preference or system preference
(() => {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (_) {}
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved ? saved : (prefersDark ? 'dark' : 'light'));
})();

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const next = rootEl.classList.contains('dark-theme') ? 'light' : 'dark';
        setTheme(next);
    themeToggleBtn.classList.add('pop');
    setTimeout(() => themeToggleBtn.classList.remove('pop'), 220);
    });
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

if (hamburger && navLinks && links) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.1}s`;
            }
        });
        hamburger.classList.toggle('toggle');
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (navLinks && navLinks.classList.contains('nav-active')) {
                hamburger.click();
            }
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        // Show success message with a more subtle notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = 'Thank you for your message. I will get back to you soon.';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
        contactForm.reset();
    });
}

// Scroll to Top Button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '\u2191';
scrollButton.className = 'scroll-top';
document.body.appendChild(scrollButton);

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add CSS for notification and minimal styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        font-size: 0.9rem;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    .notification.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    .scroll-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        display: none;
        font-size: 1.1rem;
        opacity: 0.9;
        transition: all 0.2s ease;
        z-index: 1000;
    }
    .scroll-top.show {
        display: block;
    }
    .scroll-top:hover {
        opacity: 1;
        transform: translateY(-2px);
    }
    .nav-active {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 70px;
    background: var(--nav-bg);
        width: 100%;
        text-align: center;
        padding: 1rem;
        border-bottom: 1px solid var(--border-color);
        backdrop-filter: blur(10px);
    }
    .nav-active li {
        margin: 0.75rem 0;
    }
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    .toggle span:nth-child(1) {
        transform: rotate(-45deg) translate(-4px, 5px);
    }
    .toggle span:nth-child(2) {
        opacity: 0;
    }
    .toggle span:nth-child(3) {
        transform: rotate(45deg) translate(-4px, -5px);
    }
`;
document.head.appendChild(style); 

// Dynamic sizing for project icons based on container size
(function dynamicProjectIcons() {
    const cards = document.querySelectorAll('.project-image');
    if (!('ResizeObserver' in window) || cards.length === 0) return;

    const resizer = new ResizeObserver(entries => {
        for (const entry of entries) {
            const el = entry.target;
            const icon = el.querySelector('.project-icon i');
            if (!icon) continue;
            const rect = el.getBoundingClientRect();
            const size = Math.max(28, Math.min(rect.width, rect.height) * 0.4); // ~40% of shorter side
            icon.style.fontSize = `${size}px`;
        }
    });

    cards.forEach(c => {
        resizer.observe(c);
        // initial sizing
        const icon = c.querySelector('.project-icon i');
        if (icon) {
            const rect = c.getBoundingClientRect();
            const size = Math.max(28, Math.min(rect.width, rect.height) * 0.4);
            icon.style.fontSize = `${size}px`;
        }
    });
})();