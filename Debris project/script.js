document.addEventListener("DOMContentLoaded", () => {
    // -------------- Horizontal Scroll for Gallery ----------------
    const galleryItems = document.querySelector(".gallery-items");
    let isDown = false;
    let startX, scrollLeft;

    galleryItems.addEventListener("mousedown", (e) => {
        isDown = true;
        galleryItems.classList.add("active");
        startX = e.pageX - galleryItems.offsetLeft;
        scrollLeft = galleryItems.scrollLeft;
    });

    galleryItems.addEventListener("mouseleave", () => {
        isDown = false;
        galleryItems.classList.remove("active");
    });

    galleryItems.addEventListener("mouseup", () => {
        isDown = false;
        galleryItems.classList.remove("active");
    });

    galleryItems.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - galleryItems.offsetLeft;
        const walk = (x - startX) * 3; // Faster scroll
        galleryItems.scrollLeft = scrollLeft - walk;
    });

   
// Create a custom cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// Move the cursor
document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

// Hide default cursor on body
document.body.style.cursor = 'none';

// Handle cursor for demo section
const demoSection = document.querySelector("#demo");
const iframe = document.querySelector("iframe");

if (demoSection) {
    demoSection.addEventListener("mouseenter", () => {
        cursor.style.display = "none";
        demoSection.style.cursor = "default";
    });

    demoSection.addEventListener("mouseleave", () => {
        cursor.style.display = "block";
        demoSection.style.cursor = "none";
    });
}

if (iframe) {
    iframe.addEventListener("mouseenter", () => {
        cursor.style.display = "none";
        iframe.style.cursor = "default";
    });

    iframe.addEventListener("mouseleave", () => {
        cursor.style.display = "block";
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
