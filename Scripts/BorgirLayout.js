// /assets/js/popup-only.js
(function () {
    const DATA_ATTR = 'data-shared-popup';

    const popupHtml = `
<label class="popup">
  <input type="checkbox">
  <div class="burger" tabindex="0">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav class="popup-window">
    <legend></legend>
    <ul>
      <li>
        <!-- Main Page -->
        <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2"  fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9.5L12 3l9 6.5v11a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5H9v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
        </svg>
        <a href="index.html">Main</a>
      </li>
      <li>
        <!-- Blog Page -->
        <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16v16H4z"></path>
          <path d="M8 8h8"></path>
          <path d="M8 12h6"></path>
          <path d="M8 16h4"></path>
        </svg>
        <a href="Blog.html">Blog</a>
      </li>
      <li>
        <!-- External Resources -->
        <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7h5l2 3h11v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path>
        </svg>
        <a href="ExternalResources.html">Resources</a>
      </li>
    </ul>
  </nav>
</label>
`.trim();

    function createFragment(html) {
        const t = document.createElement('template');
        t.innerHTML = html;
        return t.content.cloneNode(true);
    }

    function insertPopupBeforeFooter() {
        // Avoid duplicate insertion
        if (document.querySelector(`label.popup[${DATA_ATTR}="true"]`)) return;

        const footer = document.querySelector('footer[data-shared-footer="true"]') || document.querySelector('footer');
        const frag = createFragment(popupHtml);

        if (footer && footer.parentNode) {
            footer.parentNode.insertBefore(frag, footer);
        } else {
            // fallback: append to body (will still be fixed by your CSS)
            document.body.appendChild(frag);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertPopupBeforeFooter);
    } else {
        insertPopupBeforeFooter();
    }
 /*
    // small API for debugging if needed
    window.__insertSharedPopup = insertPopupBeforeFooter;
 */
})();
