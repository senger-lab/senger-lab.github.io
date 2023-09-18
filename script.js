function showTab(tabId) {
    // Get all tab contents
    const contents = document.querySelectorAll('.tab-content');

    // Hide all tab contents
    contents.forEach(content => {
        content.style.display = "none";
    });

    // Display the selected tab content
    document.getElementById(tabId).style.display = "block";
}
