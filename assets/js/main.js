const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

function goTo() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Periksa apakah username dan password ada di local storage atau database
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Redirect ke halaman user berdasarkan username
        if (username === 'admin@gmail.com') {
            window.location.href = '/assets/page/admin.html';
        } else {
            window.location.href = '/assets/page/user.html';
        }
    } else {
         document.getElementById('message').textContent = 'Username atau password salah!';
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah submit form yang sebenarnya
    goTo();
});
