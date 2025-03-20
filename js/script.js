document.addEventListener("DOMContentLoaded", function () {
    function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        document.getElementById(pageId).classList.add('active');

        // Update active menu link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });

        // Find the clicked link and set it as active
        document.querySelector(`a[data-page="${pageId}"]`).classList.add('active');
    }

    // Attach click event listeners to all nav items
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const pageId = this.getAttribute("data-page"); // Get the target page
            showPage(pageId);
        });
    });

    // Set default view to 'about' page
    showPage('about');
});
