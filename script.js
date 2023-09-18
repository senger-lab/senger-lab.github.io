function showTab(tabId) {
    event.preventDefault();

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';
}
