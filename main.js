document.addEventListener("DOMContentLoaded", () => {
    // 1. Ensure overlay element exists
    let overlay = document.getElementById("page-transition-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "page-transition-overlay";
        document.body.appendChild(overlay);
    }

    // 2. Smoothly fade out the curtain once the page loads
    setTimeout(() => {
        overlay.classList.add("fade-out");
    }, 60);

    // 3. Intercept navigation links for smooth curtain transition
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

                // Fade in the white curtain
                overlay.classList.remove("fade-out");

                // Navigate after curtain fully covers screen
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 350);
            }
        }
    });
});
