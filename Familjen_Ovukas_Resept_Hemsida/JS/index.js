        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const searchBar = document.querySelector('.search-bar');
        const searchResults = document.querySelector('.search-results');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            searchBar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const searchResults = document.querySelector('.search-results');

    const recipes = [
        { name: "Sarma", link: "/HTML/resept_1.html" },
        { name: "Eriks havrekakor", link: "/HTML/resept_2.html" },
        { name: "Kalkonchilli", link: "/HTML/resept_3.html" },
        { name: "Kycklingspett", link: "/HTML/resept_4.html" },
        { name: "Shepherd's pie", link: "/HTML/resept_5.html" },
        { name: "Flankstek med röd sås och ris", link: "/HTML/resept_6.html" },
        { name: "Pyttipanna plus", link: "/HTML/resept_7.html" },
        { name: "Kyckling Dumplings", link: "/HTML/resept_8.html" },
        { name: "Svart Pudding", link: "/HTML/resept_9.html" }
    ];

    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        searchResults.innerHTML = ''; // Clear previous results

        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        const filteredResults = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));

        if (filteredResults.length > 0) {
            searchResults.style.display = 'block';
            filteredResults.forEach(recipe => {
                const link = document.createElement('a');
                link.href = recipe.link;
                link.textContent = recipe.name;
                searchResults.appendChild(link);
            });
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = 'none';
        }
    });
});
