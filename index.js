const draggable = document.getElementById('draggable');

let offsetX, offsetY, isDragging = false;

draggable.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - draggable.getBoundingClientRect().left;
  offsetY = e.clientY - draggable.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    draggable.style.left = `${e.clientX - offsetX}px`;
    draggable.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});




const carousel = document.getElementById('carousel');
let cloneItems = () => {
    const items = Array.from(carousel.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });
};





var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2, /* Two slides for tablets */
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1, /* Swiper hidden in desktop via CSS */
        }
    }
});
