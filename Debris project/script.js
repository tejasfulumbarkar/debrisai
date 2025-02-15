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

function animateCursor() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();

