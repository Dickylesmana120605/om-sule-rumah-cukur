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

    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    if (accounts.find(acc => acc.username === email)) {
        alert('Username already exists!');
        return;
    }

    accounts.push({ username: email, password: password, firstname: firstname, lastname: lastname });

    localStorage.setItem('accounts', JSON.stringify(accounts));

    alert('Account created successfully!');
    window.location.href = '/login/index.html';
});
