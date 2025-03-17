document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelector('.gallery-items');
  
    let isDown = false;
    let startX;
    let scrollLeft;
  
    galleryItems.addEventListener('mousedown', (e) => {
      isDown = true;
      galleryItems.classList.add('active');
      startX = e.pageX - galleryItems.offsetLeft;
      scrollLeft = galleryItems.scrollLeft;
    });
  
    galleryItems.addEventListener('mouseleave', () => {
      isDown = false;
      galleryItems.classList.remove('active');
    });
  
    galleryItems.addEventListener('mouseup', () => {
      isDown = false;
      galleryItems.classList.remove('active');
    });
  
    galleryItems.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - galleryItems.offsetLeft;
      const walk = (x - startX) * 3; // Scroll-fast
      galleryItems.scrollLeft = scrollLeft - walk;
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    form.reset(); // Clear all input fields
  });
// Create a custom cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// Trail effect
const trails = [];
const maxTrails = 10;

function createTrail() {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);
    return trail;
}

// Create initial trails
for (let i = 0; i < maxTrails; i++) {
    trails.push(createTrail());
}

let currentTrail = 0;

// Move the cursor and update trails
document.addEventListener("mousemove", (e) => {
    // Update cursor position
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Update trail
    const trail = trails[currentTrail];
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    trail.style.opacity = 1;

    // Fade out trail gradually
    setTimeout(() => {
        trail.style.opacity = 0;
    }, 50);

    // Move to next trail position
    currentTrail = (currentTrail + 1) % maxTrails;
});

// Hide default cursor on body
document.body.style.cursor = 'none';

// Handle cursor for demo section
const demoSection = document.querySelector("#demo");
const iframe = document.querySelector("iframe");

if (demoSection) {
    demoSection.addEventListener("mouseenter", () => {
        cursor.style.display = "none";
        trails.forEach(trail => trail.style.display = "none");
        demoSection.style.cursor = "default";
    });

    demoSection.addEventListener("mouseleave", () => {
        cursor.style.display = "block";
        trails.forEach(trail => trail.style.display = "block");
        demoSection.style.cursor = "none";
    });
}

if (iframe) {
    iframe.addEventListener("mouseenter", () => {
        cursor.style.display = "none";
        trails.forEach(trail => trail.style.display = "none");
        iframe.style.cursor = "default";
    });

    iframe.addEventListener("mouseleave", () => {
        cursor.style.display = "block";
        trails.forEach(trail => trail.style.display = "block");
        iframe.style.cursor = "none";
    });
}

// Handle cursor for clickable elements
const clickableElements = document.querySelectorAll('a, button, input[type="submit"], .animated-button, .neon-pulse, [role="button"]');

clickableElements.forEach(element => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add('hover');
        element.style.cursor = "none";
    });

    element.addEventListener("mouseleave", () => {
        cursor.classList.remove('hover');
        element.style.cursor = "none";
    });
});

// Testimonials Animation Control
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');
    const testimonials = document.querySelectorAll('.testimonial');

    // Pause animation on hover
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });

    // Clone testimonials for seamless loop if needed
    const testimonialsNeeded = Math.ceil(window.innerWidth / 330) + 1;
    const currentTestimonials = testimonials.length;
    
    if (currentTestimonials < testimonialsNeeded) {
        testimonials.forEach(testimonial => {
            const clone = testimonial.cloneNode(true);
            track.appendChild(clone);
        });
    }
});

// Enhanced particle effect
function createParticles() {
    const particles = document.querySelector('.particles');
    if (!particles) return;

    const particleCount = 100; // Increased count
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particles.appendChild(particle);

        // More varied random positions and animations
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 3 + Math.random() * 7;
        const delay = Math.random() * -20;
        const size = 1 + Math.random() * 3;
        const opacity = 0.1 + Math.random() * 0.4;

        particle.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${opacity});
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat ${duration}s ${delay}s ease-in-out infinite alternate;
        `;
    }
}

// Add this to your CSS
const newStyle = document.createElement('style');
newStyle.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        100% {
            transform: translate(${Math.random() * 100}px, ${Math.random() * -100}px) rotate(360deg);
        }
    }

    .particle {
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(newStyle);

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// Add parallax effect to hero section
const heroSection = document.querySelector('.hero');
const heroImages = document.querySelectorAll('.images img');
const heroContent = document.querySelector('.content');

document.addEventListener('mousemove', (e) => {
    if (!heroSection) return;

    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    heroImages.forEach((image, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX * speed);
        const y = (mouseY * speed);
        image.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    });

    heroContent.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
});

// Animated Counter for Space Stats
const animateCounter = (element, target) => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 50; // Number of steps
    const stepDuration = duration / steps;
    let currentNumber = 0;
    
    const increment = target / steps;
    
    const updateCounter = () => {
        currentNumber += increment;
        if (currentNumber > target) {
            currentNumber = target;
        }
        element.textContent = Math.round(currentNumber).toLocaleString();
        
        if (currentNumber < target) {
            setTimeout(updateCounter, stepDuration);
        }
    };
    
    updateCounter();
};

// Intersection Observer for Space Stats
const observerOptions = {
    threshold: 0.2
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(number => {
                const target = parseInt(number.getAttribute('data-target'));
                animateCounter(number, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe the stats container
document.addEventListener('DOMContentLoaded', () => {
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }
});
// Add hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// ... existing code ...
