// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Check if videos exist and are loaded properly
    checkAndShowMedia();
});

// Function to check if media files exist and show them if they do
function checkAndShowMedia() {
    // Check and show videos
    document.querySelectorAll('video').forEach(video => {
        const videoSource = video.querySelector('source');
        if (videoSource) {
            const url = videoSource.getAttribute('src');
            
            // Check if the video file exists and is accessible
            fetch(url, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        // If video exists, hide placeholder and show video
                        const container = video.closest('.video-container') || video.parentElement;
                        const placeholder = container.querySelector('.video-placeholder');
                        
                        if (placeholder) {
                            placeholder.style.display = 'none';
                        }
                        
                        video.style.display = 'block';
                        video.setAttribute('controls', '');
                        video.setAttribute('preload', 'metadata');
                    }
                })
                .catch(error => {
                    console.log('Video not found or cannot be accessed:', url);
                });
        }
    });
    
    // Check and show images
    document.querySelectorAll('.tutorial-image').forEach(img => {
        const url = img.getAttribute('src');
        
        // Create a new image object to check if the image loads
        const testImage = new Image();
        testImage.onload = function() {
            // If image exists, hide placeholder and show image
            const container = img.closest('.step') || img.parentElement;
            const placeholder = container.querySelector('.image-placeholder');
            
            if (placeholder) {
                placeholder.style.display = 'none';
            }
            
            img.style.display = 'block';
        };
        
        testImage.onerror = function() {
            console.log('Image not found or cannot be accessed:', url);
        };
        
        // Set the source to test if the image loads
        testImage.src = url;
    });
} 