document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('homeTab').addEventListener('click', function(event) {
        event.preventDefault();
        showTab('home');
    });

    document.getElementById('applicationsTab').addEventListener('click', function(event) {
        event.preventDefault();
        showTab('applications');
    });
});

function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';
}