document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }

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
// Create cursor elements
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Create trail elements
const numTrails = 5;
const trails = [];
for (let i = 0; i < numTrails; i++) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);
    trails.push({
        element: trail,
        x: 0,
        y: 0
    });
}

// Update cursor position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Update trail positions with delay
    setTimeout(() => {
        trails.forEach((trail, index) => {
            const delay = (index + 1) * 60;
            setTimeout(() => {
                trail.x = e.clientX;
                trail.y = e.clientY;
                trail.element.style.left = trail.x + 'px';
                trail.element.style.top = trail.y + 'px';
                trail.element.style.opacity = 1 - (index / numTrails);
            }, delay);
        });
    }, 50);
});

// Add hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, input[type="submit"], .animated-button');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    trails.forEach(trail => {
        trail.element.style.display = 'none';
    });
});

// Show cursor when entering window
document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
    trails.forEach(trail => {
        trail.element.style.display = 'block';
    });
});

// Testimonials Animation
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    
    // Intersection Observer for testimonials
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200); // Stagger the animations
                
                testimonialObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe each testimonial
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonialObserver.observe(testimonial);
    });
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

// Audio player functionality
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.querySelector('audio');
    
    // Set initial time to 36 seconds when audio is loaded
    audioPlayer.addEventListener('loadedmetadata', function() {
        audioPlayer.currentTime = 36;
    });

    // When play button is clicked, ensure it starts from 36 seconds if at beginning
    audioPlayer.addEventListener('play', function() {
        if (audioPlayer.currentTime < 36) {
            audioPlayer.currentTime = 36;
        }
    });
});
