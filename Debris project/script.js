document.addEventListener("DOMContentLoaded", () => {
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

    // -------------- Glowing Orb Cursor ----------------

  // -------------- Glowing Orb Cursor ----------------

let posX = 0, posY = 0;
let mouseX = 0, mouseY = 0;
const speed = 0.1; // Adjust for smoother movement

const orbCursor = document.querySelector('.orb-cursor');

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateOrb() {
    const distX = mouseX - posX;
    const distY = mouseY - posY;
    posX += distX * speed;
    posY += distY * speed;

    orbCursor.style.left = `${posX}px`;
    orbCursor.style.top = `${posY}px`;

    requestAnimationFrame(animateOrb);
}

animateOrb();
