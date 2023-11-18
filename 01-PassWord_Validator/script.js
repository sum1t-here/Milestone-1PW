function validatePassword() {
  const password = document.getElementById('pswd1').value;
  const confirmPassword = document.getElementById('pswd2').value;

  if (password !== confirmPassword) {
    document.getElementById('message').innerHTML =
      "<span style='color:red'>Password didn't match. Password validation unsuccessful</span>";
  } else {
    document.getElementById('message').innerHTML =
      "<span style='color:green'>Password Matched. Password validation Successful</span>";
  }
}
