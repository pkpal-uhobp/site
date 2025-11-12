// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarCenter = document.getElementById('navbarCenter');
    
    if (navbarToggler && navbarCenter) {
        navbarToggler.addEventListener('click', function(e) {
            e.stopPropagation();
            navbarCenter.classList.toggle('show');
        });
        
        // Close menu when clicking on a link
        const navLinks = navbarCenter.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarCenter.classList.remove('show');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbarCenter.contains(event.target);
            const isClickOnToggler = navbarToggler.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggler && navbarCenter.classList.contains('show')) {
                navbarCenter.classList.remove('show');
            }
        });
    }
});
