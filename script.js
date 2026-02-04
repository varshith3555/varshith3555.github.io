/**
 * GitHub Portfolio - Repository Fetcher
 * Fetches and displays repositories from GitHub API
 */

// Configuration
const CONFIG = {
    githubUsername: 'varshith3555',
    apiBaseUrl: 'https://api.github.com',
};

// DOM Elements
const repoGrid = document.getElementById('repo-grid');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error-message');
const errorText = document.getElementById('error-text');

/**
 * Fetch repositories from GitHub API
 * @returns {Promise<Array>} Array of repository objects
 */
async function fetchRepositories() {
    try {
        // Show loading state
        loadingElement.style.display = 'flex';
        errorElement.style.display = 'none';
        repoGrid.innerHTML = '';

        // Construct API URL for user's public repositories
        const apiUrl = `${CONFIG.apiBaseUrl}/users/${CONFIG.githubUsername}/repos?sort=updated&direction=desc&per_page=100`;

        // Fetch data from GitHub API
        const response = await fetch(apiUrl);

        // Handle HTTP errors
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        // Parse JSON response
        const repositories = await response.json();

        // Check if repositories array is empty
        if (!Array.isArray(repositories) || repositories.length === 0) {
            showError('No public repositories found. Please ensure your GitHub profile has public repositories.');
            return;
        }

        // Hide loading state
        loadingElement.style.display = 'none';

        // Display repositories
        displayRepositories(repositories);

    } catch (error) {
        // Hide loading state
        loadingElement.style.display = 'none';

        // Log error for debugging
        console.error('Error fetching repositories:', error);

        // Show error message to user
        showError(`Failed to load repositories: ${error.message}`);
    }
}

/**
 * Display repositories in the grid
 * @param {Array} repositories - Array of repository objects from GitHub API
 */
function displayRepositories(repositories) {
    // Clear grid
    repoGrid.innerHTML = '';

    // Create and append repository card for each repository
    repositories.forEach(repo => {
        const card = createRepositoryCard(repo);
        repoGrid.appendChild(card);
    });
}

/**
 * Create a repository card element
 * @param {Object} repo - Repository object from GitHub API
 * @returns {HTMLElement} Repository card element
 */
function createRepositoryCard(repo) {
    // Create main card container
    const card = document.createElement('div');
    card.className = 'repo-card';

    // Create repository header (name)
    const header = document.createElement('div');
    header.className = 'repo-header';

    const nameElement = document.createElement('h3');
    nameElement.className = 'repo-name';
    nameElement.textContent = repo.name;

    header.appendChild(nameElement);

    // Create description
    const description = document.createElement('p');
    description.className = 'repo-description';
    description.textContent = repo.description || '';

    // Create footer with language and link
    const footer = document.createElement('div');
    footer.className = 'repo-footer';

    // Create language badge
    const language = document.createElement('span');
    language.className = 'repo-language';
    language.textContent = repo.language || '';

    // Create link to repository
    const link = document.createElement('a');
    link.className = 'repo-link';
    link.href = repo.html_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'View';

    footer.appendChild(language);
    footer.appendChild(link);

    // Assemble card
    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(footer);

    return card;
}

/**
 * Display error message to user
 * @param {string} message - Error message to display
 */
function showError(message) {
    errorElement.style.display = 'block';
    errorText.textContent = message;
    repoGrid.innerHTML = '';
}

/**
 * Initialize the application
 * Fetch repositories when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    fetchRepositories();
});

/**
 * Optional: Add ability to refresh repositories
 * Uncomment to enable manual refresh functionality
 */
// function refreshRepositories() {
//     fetchRepositories();
// }

// Example: Add refresh button functionality (if button exists)
// const refreshButton = document.getElementById('refresh-button');
// if (refreshButton) {
//     refreshButton.addEventListener('click', refreshRepositories);
// }
