        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const searchBar = document.querySelector('.search-bar');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            searchBar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Add smooth scrolling to CTA button
        document.querySelector('.cta-button').addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector('footer').offsetTop,
                behavior: 'smooth'
            });
        });

        // Simple search functionality
        document.querySelector('.search-bar').addEventListener('input', (e) => {
            console.log('Searching for:', e.target.value);
            // Add actual search implementation here
        });