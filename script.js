function showTab(tabId) {
    // Remove active classes
    const activeTabContent = document.querySelector('.tab-content.active');
    if (activeTabContent) {
        activeTabContent.classList.remove('active');
    }

    // Add active class to the selected tab content
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.classList.add('active');
    }
}
