// Initialize an empty cart array to store cart items
let cart = [];

// Function to add product to cart
function addToCart(productId) {
    // Find product details based on productId (you can implement this based on your backend or directly in JS)
    let product = findProductById(productId);
    
    // Check if product already exists in cart
    let existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        // If product already exists, increase quantity
        existingItem.quantity++;
    } else {
        // If product does not exist, add it to cart with quantity 1
        cart.push({ productId: productId, name: product.name, price: product.price, quantity: 1 });
    }
    
    // Update the cart display
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    // Get the cart container element (where you want to display cart items)
    let cartContainer = document.getElementById('cart-container');
    
    // Clear existing cart items
    cartContainer.innerHTML = '';
    
    // Loop through each item in the cart and display it
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>Quantity: ${item.quantity}</span>
        `;
        cartContainer.appendChild(itemElement);
    });
}

// Function to prepare cart items for WhatsApp message
function prepareCartForWhatsApp() {
    let message = "Order Details:%0A";
    
    // Loop through each item in the cart and add to message
    cart.forEach(item => {
        message += `${item.name} (${item.quantity} case)%0A`;
    });
    
    // Encode message for URL
    return encodeURIComponent(message);
}

// Function to handle checkout (redirect to WhatsApp)
function checkout() {
    let whatsappMessage = prepareCartForWhatsApp();
    let whatsappURL = `https://wa.me/918101482088?text=${whatsappMessage}`;
    
    // Redirect to WhatsApp
    window.location.href = whatsappURL;
}

function findProductById(productId) {
    // Implement logic to fetch product details from your data source or hardcode it here
    // This is a placeholder function
    switch (productId) {
        case '1':
            return { productId: '1', name: 'Teafarm Gold 250g', price: 135.00 };
        case '2':
            return { productId: '2', name: 'Teafarm Gold 500g', price: 290.00 };
        case '3':
            return { productId: '3', name: 'Coconut Crunch', price: 290.00 };
        case '4':
            return { productId: '4', name: 'Choco Chip', price: 290.00 };
        case '5':
            return { productId: '5', name: 'Choco Puff', price: 290.00 };
        default:
            return null;
    }
}

// Example event listener to handle Add to Cart button click
document.addEventListener('DOMContentLoaded', function() {
    let addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            let productId = button.getAttribute('data-product-id');
            addToCart(productId);
        });
    });
    
    // Add event listener for checkout button
    let checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        checkout();
    });
});

// Handle form validation for login form (Assuming this is in another script)
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
// Function to prepare cart items for WhatsApp message
function prepareCartForWhatsApp() {
    let message = "Order Details:\n"; // Initialize message with a header
    
    // Loop through each item in the cart and add to message
    cart.forEach((item, index) => {
        // Append each item's details to the message with newline characters
        message += `${item.name} (Quantity: ${item.quantity})\n`;
    });
    
    // Encode message for URL
    return encodeURIComponent(message);
}




// Handle form validation for signup form (Assuming this is in another script)
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
