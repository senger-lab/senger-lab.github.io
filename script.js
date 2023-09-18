function showTab(tabId) {
    // Remove active classes from all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Display the selected tab content
    document.getElementById(tabId).classList.add('active');
}
