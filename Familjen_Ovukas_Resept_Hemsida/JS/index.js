// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');
const searchResults = document.querySelector('.search-results');

// Toggle the mobile menu, search bar, and menu button on click
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle visibility of the navigation links
    searchBar.classList.toggle('active'); // Toggle visibility of the search bar
    menuToggle.classList.toggle('active'); // Toggle the menu button state (active/inactive)
});

// Wait until the document is fully loaded before running the search functionality
document.addEventListener('DOMContentLoaded', () => {
    // Define the list of recipes for searching
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

    // Listen for input events on the search bar
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase(); // Get the search query and convert to lowercase
        searchResults.innerHTML = ''; // Clear previous search results

        // If no query, hide the search results
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        // Filter recipes based on query
        const filteredResults = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));

        // Display the filtered results if any are found
        if (filteredResults.length > 0) {
            searchResults.style.display = 'block'; // Show the search results box
            filteredResults.forEach(recipe => {
                const link = document.createElement('a'); // Create a new <a> element for each recipe
                link.href = recipe.link; // Set the link to the recipe's page
                link.textContent = recipe.name; // Set the text of the link to the recipe's name
                searchResults.appendChild(link); // Append the link to the search results container
            });
        } else {
            searchResults.style.display = 'none'; // Hide the search results if no matches
        }
    });

    // Hide search results when clicking outside of the search bar or search results
    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = 'none'; // Hide results if clicked outside
        }
    });
});
