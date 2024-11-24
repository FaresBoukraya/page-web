document.getElementById('toggle-form').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('toggle-form-login').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Handle form submissions
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here (e.g., API call)
    alert('Login form submitted');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your signup logic here (e.g., API call)
    alert('Signup form submitted');
});