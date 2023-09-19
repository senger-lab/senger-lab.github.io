document.addEventListener("DOMContentLoaded", function() {
    let homeContent = document.getElementById('home');
    let applicationsContent = document.getElementById('applications');
    let homeTab = document.getElementById('homeTab');
    let applicationsTab = document.getElementById('applicationsTab');

    // Set initial state
    homeContent.style.display = "block";

    homeTab.addEventListener('click', function() {
        homeContent.style.display = "block";
        applicationsContent.style.display = "none";
    });

    applicationsTab.addEventListener('click', function() {
        homeContent.style.display = "none";
        applicationsContent.style.display = "block";
    });
});