// Function to handle button clicks
function handleButtonClick(buttonType) {
    switch(buttonType) {
        case 'startLearning':
            alert("Welcome to T@lkTrek! Let's start learning!");
            break;
        case 'login':
            alert("Redirecting to login page...");
            // Here you can implement redirection to a login page
            break;
        case 'signup':
            alert("Redirecting to signup page...");
            // Here you can implement redirection to a signup page
            break;
        default:
            console.log("Unknown button type");
    }
}

// Function to handle search form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const searchInput = document.querySelector('input[type="search"]');
    const searchQuery = searchInput.value;
    alert(`Searching for: ${searchQuery}`);
    // Here you can implement the search functionality (e.g., redirect to a search results page)
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    const startLearningButton = document.querySelector('.btn-outline-danger');
    const loginButton = document.querySelector('.btn-outline-warning');
    const signupButton = document.querySelector('.btn-outline-primary');
    
    startLearningButton.addEventListener('click', () => handleButtonClick('startLearning'));
    loginButton.addEventListener('click', () => handleButtonClick('login'));
    signupButton.addEventListener('click', () => handleButtonClick('signup'));

    // Event listener for search form
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', handleSearch);
});