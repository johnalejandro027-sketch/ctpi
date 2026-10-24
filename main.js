document.addEventListener("DOMContentLoaded", () => {
    // 1. Ensure overlay element exists
    let overlay = document.getElementById("page-transition-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "page-transition-overlay";
        document.body.appendChild(overlay);
    }

    // 2. Intercept navigation links for smooth curtain transition
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a");

        if (link && link.getAttribute("href")) {
            const targetUrl = link.getAttribute("href");

            if (
                targetUrl &&
                !targetUrl.startsWith("#") &&
                !targetUrl.startsWith("http") &&
                !targetUrl.startsWith("mailto:") &&
                !link.hasAttribute("download")
            ) {
                e.preventDefault();

                // Trigger curtain fade-in smoothly
                overlay.classList.add("active");

                // Navigate after curtain covers screen
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 350);
            }
        }
    });
});
