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
    window.showMessage = function(productName, price) {
        const existingItem = cartItems.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ name: productName, price: price, quantity: 1 });
        }
        updateCartIcon();
        $('#addToCartModal').modal('show'); 
    };

    // Function to update the cart icon with the number of items
    function updateCartIcon() {
        const cartIcon = document.querySelector(".fa-cart-arrow-down");
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        if (totalItems > 0) {
            cartIcon.style.color = "#D32F2F";
            cartIcon.textContent = totalItems; 
        } else {
            cartIcon.style.color = "#f4f8fa";
            cartIcon.textContent = ''; 
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
    // Function to search products
    window.searchProducts = function() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        console.log("Search input:", input);
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const productName = card.getAttribute('data-name').toLowerCase();
            console.log("Product name:", productName); 
            if (productName.includes(input)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    };
   
});


    // Function to calculate the total price of items in the cart
    function calculateTotalPrice() {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Function to show the payment modal
        function showModal() {
        if (cartItems.length === 0) {
            $('#emptyCartModal').modal('show'); 
            return;
        }
        const modal = document.getElementById("cardModal");
        modal.style.display = "flex";
    }

    // Function to close the modal
    window.closeModal = function() {
        const modal = document.getElementById("cardModal");
        modal.style.display = "none";
    };

    document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("cardNumber");
    const cardExpiryInput = document.getElementById("cardExpiry");
    const cardCVVInput = document.getElementById("cardCVV");

    // Ensure only numbers can be entered in the card number input
    cardNumberInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ''); 
        let formattedValue = '';
        for (let i = 0; i < value.length; i += 4) {
            formattedValue += value.substring(i, i + 4) + ' ';
        }
        e.target.value = formattedValue.trim();
    });

    // Format card expiry input
    cardExpiryInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/[^0-9]/g, ''); 
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }
        e.target.value = value;
    });

    // Ensure CVV input only allows numbers
    cardCVVInput.addEventListener("input", function (e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Function to process the payment
    window.processPayment = function(event) {
        event.preventDefault();

        const cardName = document.getElementById("cardName").value.trim();
        const cardNumber = document.getElementById("cardNumber").value.trim().replace(/\s+/g, '');
        const cardExpiry = document.getElementById("cardExpiry").value.trim();
        const cardCVV = document.getElementById("cardCVV").value.trim();

        const cardNumberPattern = /^\d{16}$/;
        const cardExpiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        const cardCVVPattern = /^\d{3}$/;

        if (!cardName) {
            alert("Ju lutem shtypni emrin e mbajtësit të kartës.");
            return;
        }
        if (!cardNumberPattern.test(cardNumber)) {
            alert("Numri i kartës duhet të jetë 16 shifra.");
            return;
        }
        if (!cardExpiryPattern.test(cardExpiry)) {
            alert("Data e skadimit duhet të jetë në formatin MM/YY.");
            return;
        }
        if (!cardCVVPattern.test(cardCVV)) {
            alert("CVV duhet të jetë 3 shifra.");
            return;
        }

        $('#paymentSuccessModal').modal('show');
        cartItems = [];
        updateCartIcon();
        closeModal();
    };
});



    // Function to process the cash payment
    window.processCashPayment = function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();
        const country = document.getElementById("country").value.trim();
        const cashAmount = document.getElementById("cashAmount").value.trim();

        if (!fullName || !address || !city || !country || !cashAmount) {
            alert("Ju lutem plotësoni të gjitha fushat.");
            return;
        }

        // Simulate payment processing
        setTimeout(() => {
            $('#paymentSuccessModal').modal('show'); 
            cartItems = [];
            updateCartIcon();
            closeModal();
        }, 1000); 
    };

    // Add event listener to the cart icon
    document.addEventListener('DOMContentLoaded', function() {
        const cartIcon = document.querySelector(".fa-cart-arrow-down");
        cartIcon.addEventListener('click', showPaymentOptions);
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
    window.showPaymentOptions = function() {
        if (cartItems.length === 0) {
            $('#emptyCartModal').modal('show'); 
            return;
        }
        const modal = document.getElementById("paymentOptionsModal");
        modal.style.display = "flex";
    };

    // Show card payment modal
    document.getElementById("cardPaymentBtn").addEventListener('click', function() {
        document.getElementById("paymentOptionsModal").style.display = "none";
        document.getElementById("cardPaymentModal").style.display = "flex";
    });

    // Show cash payment modal
    document.getElementById("cashPaymentBtn").addEventListener('click', function() {
        document.getElementById("paymentOptionsModal").style.display = "none";
        document.getElementById("cashPaymentModal").style.display = "flex";
    });

    // Close any visible modal
    window.closeModal = function() {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.style.display = "none";
        });
    };

    // Add event listener for the cart icon
    document.addEventListener('DOMContentLoaded', function() {
        const cartIcon = document.querySelector(".fa-cart-arrow-down");
        cartIcon.addEventListener('click', showPaymentOptions);
    });


var slideIndex = 1;
document.addEventListener("DOMContentLoaded", function () {
    const slideWrappers = document.querySelectorAll("#slideWrapper");

    slideWrappers.forEach(wrapper => {
        let slideIndex = 0;
        showSlides(wrapper, slideIndex);

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

document.addEventListener('DOMContentLoaded', function() {
    var userIcon = document.getElementById('user');
    userIcon.addEventListener('click', function() {
        $('#userModal').modal('show');
    });

    // Update the modal content when the user clicks the login button
    document.querySelector('#userModal .btn-danger').addEventListener('click', function() {
        $('#userModal .modal-body form').hide();
        $('#userModal .modal-body').html('<p>Jeni kyçur me sukses!</p>');
        $('#userModal .modal-footer').html('<button type="button" class="btn btn-danger" data-dismiss="modal">Mbyll</button>');
    });
});
