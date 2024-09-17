// Toggle between registration and login forms
function toggleForm(formId) {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    
    if (formId === 'register') {
        document.getElementById('register').style.display = 'block';
    } else if (formId === 'login') {
        document.getElementById('login').style.display = 'block';
    }
}

// Load the default view when the page loads
window.onload = function() {
    toggleForm('register');
    checkLoginStatus();
};

// Registration form handling
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const occupation = document.getElementById('occupation').value;
    const income = document.getElementById('income').value;
    const expenses = document.getElementById('expenses').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = {
        name,
        age,
        address,
        occupation,
        income,
        expenses,
        username,
        password
    };

    // Save user data in localStorage
    localStorage.setItem(username, JSON.stringify(user));
    alert("Registration successful! You can now log in.");
    toggleForm('login');
});

// Login form handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem(username));

    // Check if user exists and password matches
    if (user && user.password === password) {
        // Save login status in sessionStorage
        sessionStorage.setItem('loggedInUser', username);

        // Clear login form inputs
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';

        // Redirect to another page (e.g., the main page)
        window.location.href = '../index.html'; // Adjust the path according to your file structure
    } else {
        alert("Invalid username or password.");
    }
});

// Check login status
function checkLoginStatus() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    // If a user is logged in, display the home page or welcome message
    if (loggedInUser) {
        document.getElementById('userWelcome').textContent = `Welcome, ${loggedInUser}!`;
        toggleForm('home');
    } else {
        // If no user is logged in, show the login form
        toggleForm('login');
    }
}

// Logout functionality
function logout() {
    // Remove login status from sessionStorage
    sessionStorage.removeItem('loggedInUser');

    // Clear any personalized welcome messages
    document.getElementById('userWelcome').textContent = '';

    // Redirect to login form
    toggleForm('login');

    // Optionally redirect to login page or show confirmation
    window.location.href = 'login.html'; // Adjust path if needed
}
