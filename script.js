
    document.addEventListener('DOMContentLoaded', () => {
        const orderButtons = document.querySelectorAll('.order-button');
        orderButtons.forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault();
                const productInfo = event.target.closest('.product-info');
                const productTitle = productInfo.querySelector('.product-title').innerText;
                const productPrice = productInfo.querySelector('.product-price').innerText;
                const message = `Order Details:\nProduct: ${productTitle}\nPrice: ${productPrice}`;
                const whatsappUrl = `https://wa.me/918101482088?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            });
        });
    });

    // Handle form validation for login form
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            if (validateEmail(email) && validatePassword(password)) {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    alert('Login successful');
                    // Redirect to the main page
                    window.location.href = 'index.html';
                } else {
                    alert('User not found. Please sign up.');
                }
            } else {
                alert('Please enter a valid email and password');
            }
        });
    }

    // Handle form validation for signup form
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const confirmPassword = document.querySelector('#confirm-password').value;

            if (validateName(name) && validateEmail(email) && validatePassword(password) && password === confirmPassword) {
                const userId = Date.now(); // Mock user ID generation
                localStorage.setItem('userId', userId);
                alert('Signup successful. Your ID is ' + userId);
                // Redirect to the login page
                window.location.href = 'login.html';
            } else {
                alert('Please fill out the form correctly');
            }
        });
    }

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // Example: Password should be at least 6 characters
    return password.length >= 8;
}

function validateName(name) {
    // Example: Name should be at least 2 characters
    return name.length >= 2;
}
