/* Initialize all carousels on the page.
    Each carousel gets its own state and timer so multiple instances work independently. */
    (function () {
    const CAROUSEL_SELECTOR = '.showcase-carousel';
    const AUTOPLAY_MS = 4500;

    // Initialize a single carousel element
    function initCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevBtn = carousel.querySelector('.carousel-button.prev');
    const nextBtn = carousel.querySelector('.carousel-button.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');

    if (!track || slides.length === 0) return; // guard for malformed markup

    // state unique to this carousel instance
    let current = 0;
    let isMoving = false;
    let startX = 0;
    let currentTranslate = 0;
    let autoplayId = null;

    // build dots if not present
    // (if your markup already includes dot buttons, adapt this)
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
    btn.dataset.index = i;
    btn.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
    dotsContainer.appendChild(btn);
});
    const dots = Array.from(dotsContainer.querySelectorAll('button'));

    function goTo(index, withTransition = true) {
    // clamp/cycle index
    const clamped = (index + slides.length) % slides.length;
    current = clamped;
    if (!withTransition) track.style.transition = 'none';
    else track.style.transition = '';
    const x = -current * 100;
    track.style.transform = `translateX(${x}%)`;
    dots.forEach((d, i) => d.setAttribute('aria-pressed', i === current ? 'true' : 'false'));
}

    // event handlers
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach(dot => dot.addEventListener('click', (e) => goTo(Number(e.currentTarget.dataset.index))));

    // keyboard navigation on this carousel
    carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
});

    // touch / swipe support (scoped to this track)
    track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    currentTranslate = -current * carousel.offsetWidth;
    track.style.transition = 'none';
    isMoving = true;
}, { passive: true });

    track.addEventListener('touchmove', (e) => {
    if (!isMoving) return;
    const dx = e.touches[0].clientX - startX;
    const pct = (currentTranslate + dx) / carousel.offsetWidth * 100;
    track.style.transform = `translateX(${pct}%)`;
}, { passive: true });

    track.addEventListener('touchend', (e) => {
    if (!isMoving) return;
    isMoving = false;
    const endX = (e.changedTouches && e.changedTouches[0].clientX) || startX;
    const dx = endX - startX;
    const threshold = Math.max(20, carousel.offsetWidth * 0.12);
    if (dx < -threshold) goTo(current + 1);
    else if (dx > threshold) goTo(current - 1);
    else goTo(current); // snap back
});

    // autoplay controls unique per-instance
    function stopAutoplay() { if (autoplayId) { clearInterval(autoplayId); autoplayId = null; } }
    function startAutoplay() { stopAutoplay(); autoplayId = setInterval(() => goTo(current + 1), AUTOPLAY_MS); }

    // pause on hover/focus for this carousel
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    // make carousel focusable for keyboard navigation
    carousel.tabIndex = 0;

    // keep layout in sync when window resizes
    window.addEventListener('resize', () => goTo(current, false));

    // initial position and start autoplay
    goTo(0, false);
    startAutoplay();

    // return a cleanup function if you ever need to destroy the instance
    return () => {
    stopAutoplay();
    // remove listeners if necessary (not implemented here)
};
}

    // find all carousels and initialize each
    const carousels = Array.from(document.querySelectorAll(CAROUSEL_SELECTOR));
    carousels.forEach(initCarousel);
})();
    