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
