document.getElementById("menu-toggle").addEventListener("click", function() {
    var sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("hidden"); // Toggles the 'hidden' class on or off
});

// JavaScript to add/remove the 'active' class on click
const menuLinks = document.querySelectorAll('#section-menu ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        menuLinks.forEach(item => item.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});