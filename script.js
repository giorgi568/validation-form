function checkZIP() {
  const ZIPs = {
    USA: [
      '^[0-9]{5}(?:-[0-9]{4})?$',
      'ZIP codes in USA should be exactly 5 digits long and might have additional 4 digits after hyphen',
    ],
    Germany: [
      '^[0-9]{5}(?:-[0-9]{4})?$',
      'ZIP codes in Germany are 5 digits long and might have additional 4 digits after hyphen',
    ],
    England: [
      '^[A-Z]{1,2}[0-9R][0-9A-Z]?●[0-9][ABD-HJLNP-UW-Z]{2}$',
      'Postal codes in England are composed of five to seven alphanumeric characters separated by a space',
    ],
  };
  const country = document.getElementById('country').value;
  const ZIP = document.getElementById('ZIP').value;

  const constraint = new RegExp(ZIPs[country][0], '');

  if (constraint.test(ZIP)) {
    document.getElementById('ZIP').setCustomValidity('');
  } else {
    document.getElementById('ZIP').setCustomValidity(ZIPs[country][1]);
  }
}

function checkPassword() {
  const constraint = new RegExp('(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$', '');
  const password = document.getElementById('password').value;

  if (constraint.test(password)) {
    document.getElementById('password').setCustomValidity('');
  } else {
    document
      .getElementById('password')
      .setCustomValidity(
        'password must contain minimum eight characters, at least one letter and one number, no special characters'
      );
    document.getElementById('password').reportValidity();
  }
}

function confirmPassword() {
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('passwordConfirmation').value;

  if (password2 === password) {
    document.getElementById('passwordConfirmation').setCustomValidity('');
  } else {
    document
      .getElementById('passwordConfirmation')
      .setCustomValidity('Passwords does not match!');
    document.getElementById('passwordConfirmation').reportValidity();
  }
}

window.onload = () => {
  document.getElementById('ZIP').oninput = checkZIP;
  document.getElementById('password').oninput = checkPassword;
  document.getElementById('passwordConfirmation').oninput = confirmPassword;
  document.getElementById('submit').onclick = (e) => {
    const form = document.getElementById('form');
    if(form.checkValidity()){
      e.preventDefault();
      window.alert('high five');
    }
  };
  // document.getElementById('passwordConfirmation').oninput = confirmPassword;
};
