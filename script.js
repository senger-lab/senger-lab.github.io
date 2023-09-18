function showTab(tabId) {
    // Prevent default link behavior
    event.preventDefault();

    // Remove active classes from previous tab contents and tabs
    document.querySelector('.tab-content.active').classList.remove('active');
    const activeTab = document.querySelector('nav a.active');
    if (activeTab) {
        activeTab.classList.remove('active');
    }

    // Add active class to the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked tab
    const tabs = document.querySelectorAll('nav a');
    tabs.forEach(tab => {
        if (tab.hasAttribute('onclick') && tab.getAttribute('onclick').includes(tabId)) {
            tab.classList.add('active');
        }
    });
}