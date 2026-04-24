/*
     Sidebar behaviour
     
     Observer 1 — show/hide
       Watches the top #toc section. When it leaves the
       viewport the sidebar gains .visible; when it
       re-enters the sidebar hides again.
       
     Observer 2 — active link highlighting
       Watches every content section (all <section> except
       #toc). Tracks each section's intersection ratio and
       marks the most-visible one .active in the sidebar.
       The active link is also scrolled into view inside
       the sidebar itself so it's always visible.
*/
(function () {
    const sidebar = document.getElementById('toc-sidebar');
    const topToc = document.getElementById('toc');
    const sideLinks = sidebar.querySelectorAll('a');

    // 2. Active link
    // All content sections except the top TOC
    const sections = Array.from(document.querySelectorAll('section:not(#toc)'));

    // section id → sidebar <a>
    const linkMap = {};
    sideLinks.forEach(a => {
        linkMap[a.getAttribute('href').slice(1)] = a;
    });

    // Remember each section's latest intersection ratio
    const ratios = {};

    new IntersectionObserver(
        entries => {
            // Update ratios
            entries.forEach(e => {
                ratios[e.target.id] = e.intersectionRatio;
            });

            // Pick the section with the highest ratio
            let bestId = null, bestVal = -1;
            for (const [id, r] of Object.entries(ratios)) {
                if (r > bestVal) {
                    bestVal = r;
                    bestId = id;
                }
            }

            // Update .active and scroll it into view in the sidebar
            sideLinks.forEach(a => a.classList.remove('active'));
            if (bestId && linkMap[bestId]) {
                linkMap[bestId].classList.add('active');
                linkMap[bestId].scrollIntoView({block: 'nearest'});
            }
        },
        {threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]}
    ).observe; // initialise below

    // Can't chain .observe on constructor directly — loop manually
    const obs = new IntersectionObserver(
        entries => {
            entries.forEach(e => {
                ratios[e.target.id] = e.intersectionRatio;
            });
            let bestId = null, bestVal = -1;
            for (const [id, r] of Object.entries(ratios)) {
                if (r > bestVal) {
                    bestVal = r;
                    bestId = id;
                }
            }
            sideLinks.forEach(a => a.classList.remove('active'));
            if (bestId && linkMap[bestId]) {
                linkMap[bestId].classList.add('active');
                linkMap[bestId].scrollIntoView({block: 'nearest'});
            }
        },
        {threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]}
    );
    sections.forEach(s => obs.observe(s));
})();