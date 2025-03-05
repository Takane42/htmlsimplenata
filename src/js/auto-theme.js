;(function () {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute("data-bs-theme") === 'auto') {
        function updateTheme() {
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            htmlElement.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
        }

        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkModeMediaQuery.addEventListener) {
            darkModeMediaQuery.addEventListener("change", updateTheme);
        } else {
            darkModeMediaQuery.addListener(updateTheme); // Fallback for older browsers
        }

        updateTheme(); // Set theme on initial load
    }
})();
