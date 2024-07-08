function goTo() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
      if (username === 'admin@gmail.com') {
          window.location.href = '/assets/page/admin.html';
      } else {
          window.location.href = '/assets/page/user.html';
      }
  } else {
       document.getElementById('message').textContent = 'Username or password incorrect!';
  }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  goTo();
});
