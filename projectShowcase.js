document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("project-container");

    projects.forEach((proj, index) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.onclick = () => {
            window.location.href = `project.html?id=${proj.id}`;
        };

        // Carousel
        const carousel = document.createElement("div");
        carousel.className = "carousel";
        let currentIndex = 0;

        const imgElements = proj.images.map((src, i) => {
            const img = document.createElement("img");
            img.src = src;
            img.loading = "eager";
            if (i === 0) img.classList.add("active");
            carousel.appendChild(img);
            return img;
        });

        const prevBtn = document.createElement("button");
        prevBtn.className = "prev";
        prevBtn.innerText = "❮";
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            imgElements[currentIndex].classList.remove("active");
            currentIndex = (currentIndex - 1 + imgElements.length) % imgElements.length;
            imgElements[currentIndex].classList.add("active");
        };

        const nextBtn = document.createElement("button");
        nextBtn.className = "next";
        nextBtn.innerText = "❯";
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            imgElements[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % imgElements.length;
            imgElements[currentIndex].classList.add("active");
        };

        carousel.append(prevBtn, nextBtn);
        card.appendChild(carousel);

        // Content
        const content = document.createElement("div");
        content.className = "project-content";
        content.innerHTML = `<h3 class="project-title">${proj.title}</h3>
                         <p class="project-desc">${proj.shortDesc}</p>`;
        card.appendChild(content);
        
        
        // Create a container for badges
        const linksContainer = document.createElement("div");
        linksContainer.className = "links-container";
        
        // For each icon/link entry
        proj.links.forEach(link => {
            let el;
            if (link.url) {
                el = document.createElement("a");
                el.href = link.url;
                el.target = "_blank";
                el.rel = "noopener noreferrer";

                // Prevent click from bubbling to the card
                el.addEventListener("click", (e) => {
                    e.stopPropagation();
                });
            } else {
                el = document.createElement("div");
            }
            el.classList.add("link-badge");

            const img = document.createElement("img");
            img.src = link.icon;
            img.alt = "";  // could set alt to service name
            el.appendChild(img);

            linksContainer.appendChild(el);
        });
        
        // append after content but _inside_ card
        card.appendChild(linksContainer);
        
        
        container.appendChild(card);
    });
});
