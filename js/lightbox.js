// Gallery Lightbox Functionality
let currentImageIndex = 0;
let galleryImages = [];

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Get all gallery images
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach((img, index) => {
        // Store image data
        galleryImages.push({
            src: img.src,
            alt: img.alt
        });

        // Add click event to open lightbox
        img.addEventListener('click', () => {
            openLightbox(index);
        });

        // Add keyboard accessibility
        img.parentElement.setAttribute('tabindex', '0');
        img.parentElement.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });
});

// Open lightbox with specific image
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    // Set image and caption
    lightboxImg.src = galleryImages[index].src;
    lightboxImg.alt = galleryImages[index].alt;
    lightboxCaption.textContent = galleryImages[index].alt;

    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Navigate to next/previous image
function changeImage(direction) {
    currentImageIndex += direction;

    // Loop around if at the end
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    // Update image and caption
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxImg.alt = galleryImages[currentImageIndex].alt;
    lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
}

// Close lightbox when clicking outside the image
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');

    if (lightbox.classList.contains('active')) {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                changeImage(-1);
                break;
            case 'ArrowRight':
                changeImage(1);
                break;
        }
    }
});

console.log('Lightbox gallery loaded! Click any image to view full size.');
