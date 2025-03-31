
document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("navbar-placeholder");

    fetch("navi.html")
        .then(response => response.text())
        .then(data => {
            placeholder.innerHTML = data;
            setActiveNavLink();
        })
        .catch(error => {
            console.error("Error loading the navigation menu:", error);
        });
});

/**
 * This function sets the active navigation link based on the current page's URL.
 */
function setActiveNavLink() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href").split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}


