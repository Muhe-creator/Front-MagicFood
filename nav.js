// Toggle the visibility of the hamburger menu
function toggleMenu() {
    // Select the navigation menu element with the class 'nav-menu'
    const navMenu = document.querySelector('.nav-menu');
    // Select the social media element with the class 'social-media'
    const socialMedia = document.querySelector('.social-media');
    navMenu.classList.toggle('active');

    // Check if either the navigation menu or social media is currently displayed as 'flex'
    if (navMenu.style.display === 'flex' || socialMedia.style.display === 'flex') {
        // If visible, hide both elements by setting their display to 'none'
        navMenu.style.display = 'none';
        socialMedia.style.display = 'none';
    } else {
        // If hidden, show navMenu by setting their display to 'flex'
        navMenu.style.display = 'flex';
    }
}

// Toggle the visibility of the search bar
// Select the button inside the element with the class 'search'
const searchButton = document.querySelector('.search button');
// Select the input field inside the element with the class 'search'
const searchInput = document.querySelector('.search input');

// Add a click event listener to the search button
searchButton.addEventListener('click', () => {
    // Select the container element with the class 'search'
    const searchContainer = document.querySelector('.search');
    // Toggle the 'active' class on the search container to show/hide it
    searchContainer.classList.toggle('none');
});

// Listen for window resize events
window.addEventListener('resize', () => {
    // Select the navigation menu element with the class 'nav-menu'
    const navMenu = document.querySelector('.nav-menu');
    // Select the social media element with the class 'social-media'
    const socialMedia = document.querySelector('.social-media');
    // Get the current width of the window
    const screenWidth = window.innerWidth;

    // If the screen width is greater than 768px, ensure the navigation menu and social media are visible
    if (screenWidth > 768) {
        navMenu.style.display = 'flex';
        socialMedia.style.display = 'flex'; // Restore visibility
    } else {
        // If the screen width is 768px or less, hide the navigation menu and social media
        navMenu.style.display = 'none';
        socialMedia.style.display = 'none'; // Hide them
    }
});
