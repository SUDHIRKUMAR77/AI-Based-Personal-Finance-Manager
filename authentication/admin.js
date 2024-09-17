// Get all users from localStorage and display them
function displayUsers() {
    const userTableBody = document.querySelector('#userTable tbody');
    
    // Loop through all items in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        
        // Check if the item is a user object
        if (user && user.username) {
            // Create a new row for each user
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.occupation}</td>
                <td>${user.income}</td>
                <td>${user.expenses}</td>
            `;
            
            userTableBody.appendChild(row);
        }
    }
}

// Call the function to display users when the page loads
window.onload = displayUsers;
