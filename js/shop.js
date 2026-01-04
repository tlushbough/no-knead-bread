// Shopping cart functionality
let cart = [];

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('breadCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartDisplay();
});

// Handle purchase button clicks
function handlePurchase(productType) {
    const products = {
        'starter': {
            name: 'No-Knead Bread Starter Kit',
            price: 39.99,
            image: 'Starter Kit'
        },
        'essential': {
            name: 'Essential Bread Baking Kit',
            price: 79.99,
            image: 'Essential Kit'
        },
        'deluxe': {
            name: 'Deluxe Artisan Bread Kit',
            price: 129.99,
            image: 'Deluxe Kit'
        },
        'recipes': {
            name: 'Recipe Expansion Pack',
            price: 12.99,
            image: 'Recipes'
        },
        'ingredients': {
            name: 'Premium Ingredient Kit',
            price: 24.99,
            image: 'Ingredients'
        },
        'masterclass': {
            name: 'Master Class Videos',
            price: 29.99,
            image: 'Videos'
        },
        'subscription': {
            name: 'Monthly Subscription Box',
            price: 19.99,
            image: 'Subscription',
            recurring: true
        }
    };

    const product = products[productType];

    if (!product) {
        console.error('Product not found:', productType);
        return;
    }

    // Add to cart
    const existingItem = cart.find(item => item.type === productType);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            type: productType,
            ...product,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('breadCart', JSON.stringify(cart));

    // Show confirmation
    showAddToCartConfirmation(product.name);

    // Update cart display
    updateCartDisplay();
}

// Show confirmation message
function showAddToCartConfirmation(productName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="checkmark">✓</span>
            <span>Added <strong>${productName}</strong> to cart!</span>
        </div>
    `;

    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .cart-notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #228B22;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
        }

        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .checkmark {
            font-size: 1.5rem;
        }

        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(notification);

    // Remove after animation
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Update cart display (for future cart page or header icon)
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    console.log(`Cart updated: ${totalItems} items, $${totalPrice.toFixed(2)}`);

    // You can add a cart icon/badge in the header here
    // For now, just log to console
}

// View cart function (for future implementation)
function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let cartHTML = 'Your Cart:\n\n';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartHTML += `${item.name} x${item.quantity} - $${itemTotal.toFixed(2)}\n`;
    });

    cartHTML += `\nTotal: $${total.toFixed(2)}`;

    alert(cartHTML + '\n\nNote: This is a demo. Checkout functionality would be integrated with a payment processor like Stripe or PayPal.');
}

// Clear cart function
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        localStorage.removeItem('breadCart');
        updateCartDisplay();
        alert('Cart cleared!');
    }
}

console.log('Shop functionality loaded! Cart system ready.');
