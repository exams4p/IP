const users = []; // Array to store user data

// Function to validate form inputs for registration
function validateRegistrationForm(username, email, password) {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validate username
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    return isValid;
}

// Function to validate form inputs for login
function validateLoginForm(username, password) {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('loginUsernameError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    if (username.length === 0) {
        document.getElementById('loginUsernameError').textContent = 'Username cannot be empty.';
        isValid = false;
    }

    if (password.length === 0) {
        document.getElementById('loginPasswordError').textContent = 'Password cannot be empty.';
        isValid = false;
    }

    return isValid;
}

// Function to display current date
function displayCurrentDate() {
    const today = new Date();
    document.getElementById('currentDate').textContent = `Current Date: ${today.toLocaleDateString()}`;
}

// Function to render user list
function renderUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear previous user list

    if (users.length === 0) {
        userList.textContent = 'No registered users yet.';
    } else {
        const ul = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `Username: ${user.username}, Email: ${user.email}`;
            ul.appendChild(li);
        });
        userList.appendChild(ul);
    }
}

// Event listener for registration form submission
document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (validateRegistrationForm(username, email, password)) {
        const newUser = { username, email, password };
        users.push(newUser); // Add new user to the array
        document.getElementById('registrationForm').reset(); // Reset form fields
        renderUserList(); // Render updated user list
    }
});

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (validateLoginForm(username, password)) {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            alert(`Welcome back, ${user.username}!`);
        } else {
            alert('Invalid username or password.');
        }
    }
});

// Initial display of current date
displayCurrentDate();
