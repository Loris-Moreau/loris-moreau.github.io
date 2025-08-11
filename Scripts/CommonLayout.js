// /assets/js/common.js
(function () {
    // CONFIG: edit these links or text in one place
    const config = {
        author: "Loris Moreau", // not added to meta via JS per your request
        socials: [
            { href: "https://linkedin.com/in/loris-moreau", aria: "LinkedIn", data: "linkedin", label: "LinkedIn" },
            { href: "https://github.com/Loris-Moreau", aria: "GitHub", data: "github", label: "GitHub" },
            { href: "https://www.youtube.com/channel/UCRfo2k8XLOiRMOcuQEtNz5g", aria: "Youtube", data: "youtube", label: "Youtube" }
        ]
    };

    // Utility: create element from HTML string
    function createFragment(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content;
    }

    function ensureBackground() {
        // don't create twice
        if (document.querySelector('body > .background[data-shared-bg]')) return;

        const bg = document.createElement('div');
        bg.className = 'background';
        bg.setAttribute('data-shared-bg', 'true');
        
        document.body.insertBefore(bg, document.body.firstChild);
    }

    function ensureFooter() {
        // If there's already a shared footer, skip
        if (document.querySelector('footer[data-shared-footer]')) return;

        // Build the socials list HTML using the config (keeps source easy to edit)
        const socialsHtml = config.socials.map(s => `
      <li class="icon-content">
        <a href="${s.href}" aria-label="${s.aria}" data-social="${s.data}" target="_blank" rel="noopener noreferrer">
          <div class="filled"></div>
          <!-- SVG icons (kept small) -->
          ${getSvgFor(s.data)}
        </a>
        <div class="tooltip">${s.label}</div>
      </li>
    `).join('');

        const footerHtml = `
      <footer data-shared-footer="true">
        <p style="padding: 7px"></p>
        <div>
          <ul class="social-media">
            ${socialsHtml}
          </ul>
        </div>
        <p style="padding: 2px"></p>
      </footer>
    `;

        const frag = createFragment(footerHtml);
        document.body.appendChild(frag);
    }

    // Returns the SVG string for a given social key (keeps main code tidy).
    // Add or replace SVGs as you like.
    function getSvgFor(key) {
        switch (key) {
            case 'linkedin':
                return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor"/></svg>`;
            case 'github':
                return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor"/></svg>`;
            case 'youtube':
                return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" fill="currentColor"/></svg>`;
            default:
                return '';
        }
    }

    // Wait for DOM ready to safely modify the body
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            ensureBackground();
            ensureFooter();
        });
    } else {
        ensureBackground();
        ensureFooter();
    }
/*
    // Export for debugging if needed (optional)
    window.__sharedLayout = {
        ensureBackground,
        ensureFooter
    };
*/
    
})();
