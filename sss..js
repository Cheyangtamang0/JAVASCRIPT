document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');

  
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = "Name must not contain numbers or special characters.";
        nameError.style.display = "block";
        return;
    } else {
        nameError.style.display = "none";
    }


    if (!emailInput.value.includes('@')) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        return;
    } else {
        emailError.style.display = "none";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = "Phone number must be exactly 10 digits.";
        phoneError.style.display = "block";
        return;
    } else {
        phoneError.style.display = "none";
    }

    
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,15}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = "Password must be 8-15 characters, contain an uppercase letter, and a special character.";
        passwordError.style.display = "block";
        return;
    } else {
        passwordError.style.display = "none";
    }

    alert("Form submitted successfully!");
});