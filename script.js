document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    // Trigger animation when the page loads
    progressBars.forEach(bar => {
        const value = bar.getAttribute("data-value"); // Get data-value from the HTML
        bar.style.width = `${value}%`; // Set the width dynamically
    });
});
