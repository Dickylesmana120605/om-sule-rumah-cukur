document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    localStorage.setItem('username', email);
    localStorage.setItem('password', password);
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);

    alert('Account created successfully!');
    window.location.href = '/login/index.html';
});