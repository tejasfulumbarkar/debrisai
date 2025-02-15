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

    let posX = 0, posY = 0;
let mouseX = 0, mouseY = 0;
const speed = 0.1; // Smoother movement

const cursor = document.createElement("div");
cursor.classList.add("orb-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

    let cursor = document.querySelector(".orb-cursor");

document.addEventListener("mousemove", (e) => {
    if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});


function animateCursor() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();
