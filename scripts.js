window.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.countapi.xyz/update/mywebsite/visitorCount/?amount=1')
    .then(res => res.json())
    .then(data => {
        document.getElementById('visitorCount').textContent = data.value;
    })
    .catch(error => {
        console.error("Error fetching visitor count:", error);
    });
});