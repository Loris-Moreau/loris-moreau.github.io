const button = document.getElementById('runaway-btn');
const threshold = 200; // pixels: start moving when mouse is closer than this

// Optional: Place button initially at window center
/*
window.addEventListener('load', () => {
    const startX = (window.innerWidth - button.offsetWidth) / 2;
    const startY = (window.innerHeight - button.offsetHeight) / 2;
    button.style.left = startX + 'px';
    button.style.top = startY + 'px';
});*/

// Listen for all mouse movements on the page
window.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    // Button center coordinates
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;
    // Distance vector from mouse to button center
    const dx = btnCenterX - e.clientX;
    const dy = btnCenterY - e.clientY;
    const dist = Math.hypot(dx, dy);

    // Only move if the cursor is within the threshold distance
    if (dist < threshold) {
        // Compute a normalized direction vector away from cursor
        const moveX = (dx / dist) * (threshold - dist + 20);
        const moveY = (dy / dist) * (threshold - dist + 20);
        // New tentative position
        let newLeft = rect.left + moveX;
        let newTop  = rect.top  + moveY;

        // Clamp to window boundaries so button stays visible
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;
        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > maxX) {
            newLeft = maxX;
        }
        if (newTop < 0) {
            newTop = 0;
        } else if (newTop > maxY) {
            newTop = maxY;
        }

        // Apply the new position
        button.style.left = newLeft + 'px';
        button.style.top  = newTop  + 'px';
    }
});
