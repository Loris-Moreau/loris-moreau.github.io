/*
  SidebarToc.js — shared sidebar TOC behaviour
  Works on both Resources.html and Blog.html

  Resources: has a #toc sentinel section
    → sidebar starts hidden, fades in once #toc scrolls off screen,
      fades out again when #toc comes back into view.

  Blog: no #toc sentinel
    → sidebar is always visible (CSS controls it via media query only).

  Active link highlighting works on any page regardless of whether
  the anchor targets are <section>, <div>, <h2>, or any other element
  — it simply looks up each href ID in the DOM directly.
*/
(function () {
    const sidebar = document.getElementById('toc-sidebar');
    if (!sidebar) return; // nothing to do if there's no sidebar

    const sideLinks = sidebar.querySelectorAll('a[href^="#"]');

    // ── 1. Show / hide (Resources only) ──────────────────────────────
    // If the page has a #toc sentinel, start the sidebar hidden and
    // reveal it once that section scrolls off screen.
    const topToc = document.getElementById('toc');
    if (topToc) {
        // Add hide-until-scroll state — toggled by the observer below
        sidebar.classList.add('hide-until-scroll');
        new IntersectionObserver(
            ([entry]) => sidebar.classList.toggle('visible', !entry.isIntersecting),
            { threshold: 0 }
        ).observe(topToc);
    }
    // No topToc → sidebar stays in its default (visible) CSS state

    // ── 2. Active link highlighting ───────────────────────────────────
    // Build the target list from the sidebar hrefs, not from a CSS
    // selector, so it works with <section>, <div>, <h2>, etc.
    const linkMap = {};  // id → <a> in sidebar
    const targets = []; // DOM elements to observe

    sideLinks.forEach(a => {
        const id = a.getAttribute('href').slice(1); // strip leading '#'
        const el = document.getElementById(id);
        if (el) {
            linkMap[id] = a;
            targets.push(el);
        }
    });

    if (targets.length === 0) return; // nothing to observe

    // Track the intersection ratio of every target
    const ratios = {};

    const obs = new IntersectionObserver(
        entries => {
            // Update stored ratios
            entries.forEach(e => { ratios[e.target.id] = e.intersectionRatio; });

            // The target with the highest visible ratio becomes active
            let bestId = null, bestVal = -1;
            for (const [id, r] of Object.entries(ratios)) {
                if (r > bestVal) { bestVal = r; bestId = id; }
            }

            // Update .active class and keep that link visible in the sidebar
            sideLinks.forEach(a => a.classList.remove('active'));
            if (bestId && linkMap[bestId]) {
                linkMap[bestId].classList.add('active');
                linkMap[bestId].scrollIntoView({ block: 'nearest' });
            }
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    targets.forEach(el => obs.observe(el));
})();
