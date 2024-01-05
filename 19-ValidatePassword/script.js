document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const validationMessage = document.getElementById('validationMessage');

  loginForm.addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(emailInput.value);

    // Validate password
    const isPasswordValid = passwordInput.value.length >= 8;

    // Display validation message
    if (isEmailValid && isPasswordValid) {
      validationMessage.textContent = 'Valid email and password!';
      validationMessage.style.color = 'green';
    } else {
      validationMessage.textContent = 'Invalid email or password!';
      validationMessage.style.color = 'red';
    }
  });
});
