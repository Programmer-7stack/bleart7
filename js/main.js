document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.display = "none";
        }
    }, 1000);
});


// Array to store cart items
let cartItems = [];

// Function to add a product to the cart
function showMessage(productName, price) {
    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.name === productName);
    if (existingItem) {
        // If the product exists, increase the quantity
        existingItem.quantity += 1;
    } else {
        // If the product does not exist, add it to the cart
        cartItems.push({ name: productName, price: price, quantity: 1 });
    }
    updateCartIcon();
    alert("Produkti u shtua në shportë!");
}

// Function to update the cart icon with the number of items
function updateCartIcon() {
    const cartIcon = document.querySelector(".fa-cart-arrow-down");
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    if (totalItems > 0) {
        cartIcon.style.color = "#D32F2F";
        cartIcon.textContent = totalItems; // Display the number of items
    } else {
        cartIcon.style.color = "#f4f8fa";
        cartIcon.textContent = ''; // Clear the number if the cart is empty
    }
}

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to show the payment modal
function showModal() {
    if (cartItems.length === 0) {
        alert("Shporta është e zbrazët!");
        return;
    }
    const modal = document.getElementById("cardModal");
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("cardModal");
    modal.style.display = "none";
}

// Function to process the payment
function processPayment(event) {
    event.preventDefault();
    alert("Blerja e produktit është kryer me sukses!");
    cartItems = []; // Empty the cart after purchase
    updateCartIcon();
    closeModal();
}

// Add event listener to the cart icon
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector(".fa-cart-arrow-down");
    cartIcon.addEventListener('click', showModal);
});

console.log("Welcome to Bleart7 Website");

const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        music.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Show payment options modal
function showPaymentOptions() {
    const modal = document.getElementById("paymentOptionsModal");
    modal.style.display = "flex";
}

// Show card payment modal
function showCardForm() {
    document.getElementById("paymentOptionsModal").style.display = "none";
    document.getElementById("cardPaymentModal").style.display = "flex";
}

// Show cash payment modal
function showCashForm() {
    document.getElementById("paymentOptionsModal").style.display = "none";
    document.getElementById("cashPaymentModal").style.display = "flex";
}

// Close any visible modal
function closeModal() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
    });
}

// Add event listener for the cart icon
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector(".fa-cart-arrow-down");
    cartIcon.addEventListener('click', showPaymentOptions);

    document.getElementById("cardPaymentBtn").addEventListener('click', showCardForm);
    document.getElementById("cashPaymentBtn").addEventListener('click', showCashForm);
});

// Function to process the payment
function processPayment(event) {
    event.preventDefault();

    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardExpiry = document.getElementById("cardExpiry").value.trim();
    const cardCVV = document.getElementById("cardCVV").value.trim();

    // Validate card name
    if (!cardName) {
        alert("Ju lutem shtypni emrin e mbajtësit të kartës.");
        return;
    }

    // Validate card number (16 digits)
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
        alert("Numri i kartës duhet të jetë 16 shifra.");
        return;
    }

    // Validate card expiry date (MM/YY)
    const cardExpiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!cardExpiryPattern.test(cardExpiry)) {
        alert("Data e skadimit duhet të jetë në 4 shifra.");
        return;
    }

    // Validate CVV (3 digits)
    const cardCVVPattern = /^\d{3}$/;
    if (!cardCVVPattern.test(cardCVV)) {
        alert("CVV duhet të jetë 3 shifra.");
        return;
    }

    alert("Blerja e produktit është kryer me sukses!");
    cartItems = []; // Empty the cart after purchase
    updateCartIcon();
    closeModal();
}

var slideIndex = 1;
document.addEventListener("DOMContentLoaded", function () {
    const slideWrappers = document.querySelectorAll("#slideWrapper");

    slideWrappers.forEach(wrapper => {
        let slideIndex = 0;
        showSlides(wrapper, slideIndex);

        // Automatically transition slides every 3 seconds
        setInterval(() => {
            plusSlides(wrapper, 1);
        }, 3000);
    });

    // Function to show slides for a specific wrapper
    function showSlides(wrapper, n) {
        const slides = wrapper.getElementsByClassName("slide");
        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    // Function to move to the next or previous slide for a specific wrapper
    function plusSlides(wrapper, n) {
        slideIndex += n;
        showSlides(wrapper, slideIndex);
    }
});
