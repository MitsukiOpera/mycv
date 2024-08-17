// Function to reveal each line one by one
function revealLines() {
    const elements = document.querySelectorAll('.main-content p, .main-content h3');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200); // Adjust the timing here (200ms per line)
    });
}

// Wait for the DOM to be fully loaded before starting the reveal
document.addEventListener('DOMContentLoaded', revealLines);


