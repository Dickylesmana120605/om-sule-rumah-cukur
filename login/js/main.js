document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  const account = accounts.find(acc => acc.username === username && acc.password === password);

  if (account) {
      if (username === 'admin@gmail.com') {
          window.location.href = '/assets/page/admin.html';
      } else {
          window.location.href = '/assets/page/user.html';
      }
  } else {
       document.getElementById('message').textContent = 'Username or password incorrect!';
  }
});
