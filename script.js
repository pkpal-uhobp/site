// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarMenu = document.getElementById('navbarNav');
    
    if (navbarToggler && navbarMenu) {
        navbarToggler.addEventListener('click', function() {
            navbarMenu.classList.toggle('show');
        });
        
        // Close menu when clicking on a link
        const navLinks = navbarMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('show');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbarMenu.contains(event.target);
            const isClickOnToggler = navbarToggler.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggler && navbarMenu.classList.contains('show')) {
                navbarMenu.classList.remove('show');
            }
        });
    }
});
