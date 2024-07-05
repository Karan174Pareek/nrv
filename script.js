let cart = [];
function addToCart(productId) {
    let product = findProductById(productId);
    let existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ productId: productId, name: product.name, price: product.price, quantity: 1 });
    }
    updateCartDisplay();
}
function updateCartDisplay() {
    let cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
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
function prepareCartForWhatsApp() {
    let message = "Order Details:%0A";
    cart.forEach(item => {
        message += `${item.name} (${item.quantity} case)%0A`;
    });
    return encodeURIComponent(message);
}
function checkout() {
    let whatsappMessage = prepareCartForWhatsApp();
    let whatsappURL = `https://wa.me/918101482088?text=${whatsappMessage}`;
    window.location.href = whatsappURL;
}
function findProductById(productId) {
    switch (productId) {
        case '1':
            return { productId: '1', name: 'Strawberry Puff-₹5.00', price: 5.00 };
        case '2':
            return { productId: '2', name: 'Strawberry Puff-₹10.00', price: 10.00 };
        case '3':
            return { productId: '3', name: 'Strawberry Puff-₹20.00', price: 20.00 };
        case '4':
            return { productId: '4', name: 'Lemon Puff-₹5.00', price: 5.00 };
        case '5':
            return { productId: '5', name: 'Lemon Puff-₹10.00', price: 10.00 };
        case '6':
            return { productId: '6', name: 'Lemon Puff-₹20.00', price: 20.00 };
        case '7':
            return { productId: '7', name: 'Choco Puff-₹5.00', price: 50.00 };
        case '8':
            return { productId: '8', name: 'Choco Puff-₹10.00', price: 10.00 };
        case '9':
            return { productId: '9', name: 'Choco Puff-₹20.00', price: 20.00 };
        case '10':
            return { productId: '10', name: 'Choco Vanilla Puff-₹5.00', price: 5.00 };
        case '11':
            return { productId: '11', name: 'Choco Vanilla Puff-₹10.00', price: 10.00 };
        case '12':
            return { productId: '12', name: 'Choco Vanilla Puff-₹20.00', price: 20.00 };
        case '13':
            return { productId: '13', name: 'Orange Puff-₹5.00', price: 5.00 };
        case '14':
            return { productId: '14', name: 'Orange Puff-₹10.00', price: 10.00 };
        case '15':
            return { productId: '15', name: 'Orange Puff-₹20.00', price: 20.00 };
        case '16':
            return { productId: '16', name: 'Choco Treat-₹5.00', price: 5.00 };
        case '17':
            return { productId: '17', name: 'Choco Treat-₹10.00', price: 10.00 };
        case '18':
            return { productId: '18', name: 'Choco Treat-₹20.00', price: 20.00 };
        case '19':
            return { productId: '19', name: 'Orange Treat-₹5.00', price: 5.00 };
        case '20':
            return { productId: '20', name: 'Orange Treat-₹10.00', price: 10.00 };
        case '21':
            return { productId: '21', name: 'Orange Treat-₹20.00', price: 20.00 };
        case '22':
            return { productId: '22', name: 'Milk Treat-5.00₹', price: 5.00 };
        case '23':
            return { productId: '23', name: 'Milk Treat-₹10.00', price: 10.00 };
        case '24':
            return { productId: '24', name: 'Milk Treat-₹20.00', price: 20.00 };
        case '25':
            return { productId: '25', name: 'Strawberry Treat-₹5.00', price: 5.00 };
        case '26':
            return { productId: '26', name: 'Elaichi Treat-₹5.00', price: 5.00 };
        case '27':
            return { productId: '27', name: 'Elaichi Treat-₹10.00', price: 10.00 };
        case '28':
            return { productId: '28', name: 'Elaichi Treat-₹20.00', price: 20.00 };
        case '29':
            return { productId: '29', name: 'Double Treat-₹5.00', price: 5.00 };
        case '30':
            return { productId: '30', name: 'Double Treat-₹10.00', price: 10.00 };
        case '31':
            return { productId: '31', name: 'Double Treat-₹20.00', price: 20.00 };
        case '32':
            return { productId: '32', name: 'Lemon Treat-₹5.00', price: 50.00 };
        case '33':
            return { productId: '33', name: 'Digestive-₹50.00', price: 5.00 };
        case '34':
            return { productId: '34', name: 'Desire Milk-₹5.00', price: 5.00 };
        case '35':
            return { productId: '35', name: 'Desire Milk-₹10.00', price: 10.00 };
        case '36':
            return { productId: '36', name: 'Desire Milk-₹20.00', price: 20.00 };
        case '37':
            return { productId: '37', name: 'Premium Coconut-₹10.00', price: 10.00 };
        case '38':
            return { productId: '38', name: 'Premium Coconut-₹20.00', price: 20.00 };
        case '39':
            return { productId: '39', name: 'Premium Coconut-₹30.00', price: 30.00 };
        case '40':
            return { productId: '40', name: 'Premium Coconut-₹40.00', price: 40.00 };
        case '41':
            return { productId: '41', name: 'Prime Time-₹10.00', price: 10.00 };
        case '42':
            return { productId: '42', name: 'Prime Time-₹20.00', price: 20.00 };
        case '43':
            return { productId: '43', name: 'Prime Time-₹40.00', price: 40.00 };
        case '44':
            return { productId: '44', name: 'Prime Time-₹50.00', price: 50.00 };
        case '45':
            return { productId: '45', name: 'Gluco Punch-₹5.00', price: 5.00 };
        case '46':
            return { productId: '46', name: 'Gluco Punch-₹10.00', price: 10.00 };
        case '47':
            return { productId: '47', name: 'Desire Butter-₹5.00', price: 5.00 };
        case '48':
            return { productId: '48', name: 'Desire Butter-₹10.00', price: 10.00 };
        case '49':
            return { productId: '49', name: 'Desire Butter-₹20.00', price: 20.00 };
        case '50':
            return { productId: '50', name: 'Desire Butter-₹30.00', price: 30.00 };
        case '51':
            return { productId: '51', name: 'Desire Butter-₹40.00', price: 40.00 };
        case '52':
            return { productId: '52', name: 'Desire Kaju-₹5.00', price: 5.00 };
        case '53':
            return { productId: '53', name: 'Desire Kaju-₹10.00', price: 10.00 };
        case '54':
            return { productId: '54', name: 'Desire Kaju-₹20.00', price: 20.00 };
        case '55':
            return { productId: '55', name: 'Desire Kaju-₹30.00', price: 30.00 };
        case '56':
            return { productId: '56', name: 'Desire Kaju-₹40.00', price: 40.00 };
        case '57':
            return { productId: '57', name: 'Cream Cracker-₹10.00', price: 10.00 };
        case '58':
            return { productId: '58', name: 'Cream Cracker-₹30.00', price: 30.00 };
        case '59':
            return { productId: '59', name: 'Marie-₹5.00', price: 5.00 };
        case '60':
            return { productId: '60', name: 'Marie-₹10.00', price: 10.00 };
        case '61':
            return { productId: '61', name: 'Marie-₹30.00', price: 30.00 };
        case '62':
            return { productId: '62', name: 'Marie-₹40.00', price: 40.00 };
        case '63':
            return { productId: '63', name: 'Marie-₹50.00', price: 50.00 };
        default:
            return null;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    let addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            let productId = button.getAttribute('data-product-id');
            addToCart(productId);
        });
    });
    let checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        checkout();
    });
});
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
                window.location.href = 'index.html';
            } else {
                alert('User not found. Please sign up.');
            }
        } else {
            alert('Please enter a valid email and password');
        }
    });
}
function prepareCartForWhatsApp() {
    let message = "Order Details:\n"; 
    cart.forEach((item, index) => {
        message += `${item.name} (Quantity: ${item.quantity})\n`;
    });
    return encodeURIComponent(message);
}
const signupForm = document.querySelector('.signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const confirmPassword = document.querySelector('#confirm-password').value;

        if (validateName(name) && validateEmail(email) && validatePassword(password) && password === confirmPassword) {
            const userId = Date.now(); 
            localStorage.setItem('userId', userId);
            alert('Signup successful. Your ID is ' + userId);
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
    return password.length >= 8;
}

function validateName(name) {
    return name.length >= 2;
}
