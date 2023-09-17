document.querySelectorAll("nav a").forEach(tab => {
    tab.addEventListener("click", event => {
        event.preventDefault();

        // Remove active classes
        document.querySelector("nav a.active").classList.remove("active");
        document.querySelector(".tab-content.active").classList.remove("active");

        // Add active class to clicked tab and corresponding content
        event.target.classList.add("active");
        document.querySelector(event.target.getAttribute("href")).classList.add("active");
    });
});