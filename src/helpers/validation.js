export function validateInput(inputIds) {
  const { name, email, password, confirm, rodo } = inputIds

  // Clear all error messages
  clearAllErrors();

  let isNameValid = true
  let isEmailValid = true
  let isPasswordValid = true
  let isConfirmValid = true
  let isRodoValid = true

  // Name
  if (name) {
    const nameInput = document.querySelector(`#${name}`)
    const nameValue = nameInput.value

    // Validate name
    if (nameValue.length < 2) {
      isNameValid = false
      displayError(name, 'Name must be at least 2 characters long.');
    } else if (!/^[a-zA-Z]+$/.test(nameValue)) {
      isNameValid = false
      displayError(name, 'Name must not contain special characters or spaces.');
    }

  }

  // Email
  if (email) {
    const emailInput = document.querySelector(`#${email}`)
    const emailValue = emailInput.value

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      isEmailValid = false
      displayError(email, 'Enter a valid email address.');
    }
  }

  // Password
  if (password) {
    const passwordInput = document.querySelector(`#${password}`)
    const passwordValue = passwordInput.value

    if (passwordValue.length < 8) {
      isPasswordValid = false
      displayError(password, 'Password must be at least 8 characters long.');
    } else if (!/[A-Z]/.test(passwordValue)) {
      isPasswordValid = false
      displayError(password, 'Password must contain at least one uppercase letter.');
    } else if (!/\d/.test(passwordValue)) {
      isPasswordValid = false
      displayError(password, 'Password must contain at least one digit.');
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(passwordValue)) {
      isPasswordValid = false
      displayError(password, 'Password must contain at least one special character.');
    }
  }

  // Confirm password
  if (confirm) {
    const confirmInput = document.querySelector(`#${confirm}`)
    const confirmValue = confirmInput.value

    const passwordInput = document.querySelector('#password');
    const passwordValue = passwordInput.value

    if (confirmValue !== passwordValue) {
      isConfirmValid = false
      displayError(confirm, 'Confirmation must match the password.');
    }
  }

  // Rodo checkbox
  if (rodo) {
    const rodoCheckbox = document.querySelector(`#${rodo}`)
    const rodoValue = rodoCheckbox.checked

    if (!rodoValue) {
      isRodoValid = false
      displayError(rodo, 'Rodo is not checked.');
    }
  }

  return isNameValid && isEmailValid && isPasswordValid && isConfirmValid && isRodoValid
}

function displayError(inputId, message) {
  const errorContainer = document.querySelector(`#${inputId}-error`);
  errorContainer.textContent = message;
}

function clearAllErrors() {
  const errorContainers = document.querySelectorAll('.error');
  errorContainers.forEach(container => {
    container.textContent = '';
  });
}