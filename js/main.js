document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader after 1 second
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.display = "none";
        }
    }, 1000);

    // Function to initialize the slideshow for a specific container
    function initializeSlideshow(containerId) {
        let slideIndex = 1;
        const slides = document.querySelectorAll(`#${containerId} .slide`);

        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            slides.forEach(slide => slide.style.display = "none");
            slides[slideIndex - 1].style.display = "block";
        }

        function plusSlides(n) {
            slideIndex += n;
            showSlides(slideIndex);
        }

        showSlides(slideIndex);
        setInterval(() => plusSlides(1), 2000);
    }

    // Initialize slideshow for the main page
    initializeSlideshow("slideWrapper");

    // Initialize slideshow for each product detail container
    document.querySelectorAll('.product-detail-container').forEach(container => {
        initializeSlideshow(container.id);
    });

    // Function to get query parameters from the URL
    function getQueryParams(qs) {
        qs = qs.split('+').join(' ');
        var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    }

    // Get the product ID or name from the URL
    var query = getQueryParams(document.location.search);
    var productId = query.product;

    // Hide all product containers initially
    document.querySelectorAll('.product-detail-container').forEach(container => container.style.display = 'none');

    // Show the selected product container
    if (productId) {
        const productContainer = document.getElementById(`product-${productId}`);
        if (productContainer) {
            productContainer.style.display = 'block';
        }
    } else {
        // Default to showing the first product or handle error
        const defaultProduct = document.getElementById('product-iphone');
        if (defaultProduct) {
            defaultProduct.style.display = 'block';
        }
    }

    // Function to search products
    function searchProducts() {
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            const searchValue = searchInput.value.toLowerCase();
            const productCards = document.querySelectorAll(".product-card");

            productCards.forEach(function(card) {
                const productName = card.getAttribute("data-name").toLowerCase();
                if (productName.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        }
    }

    // Array to store cart items
    let cartItems = [];

    // Function to add product to cart
    function showMessage(event) {
        const productName = event.target.closest('.product-info').querySelector('h2').innerText;
        const price = event.target.closest('.product-info').querySelector('.product-price').innerText;
        cartItems.push({ name: productName, price: price });
        updateCartIcon();
        alert("Produkti u shtua në shportë!");
    }

    // Update cart icon
    function updateCartIcon() {
        const cartIcon = document.querySelector(".fa-cart-arrow-down");
        if (cartIcon) {
            cartIcon.style.color = cartItems.length > 0 ? "#D32F2F" : "";
        }
    }

    // Show payment options modal
    function showPaymentOptions() {
        const modal = document.getElementById("paymentOptionsModal");
        if (modal) {
            modal.style.display = "flex";
        }
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

    // Process payment
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
            alert("Data e skadimit duhet të jetë në formatin MM/YY.");
            return;
        }

        // Validate CVV (3 digits)
        const cardCVVPattern = /^\d{3}$/;
        if (!cardCVVPattern.test(cardCVV)) {
            alert("CVV duhet të jetë 3 shifra.");
            return;
        }

        alert("Blerja e produktit është kryer me sukses!");
        cartItems = []; // Empty cart after purchase
        updateCartIcon();
        closeModal();
    }

    // Add event listeners
    document.addEventListener('DOMContentLoaded', function() {
        const cartIcon = document.querySelector(".fa-cart-arrow-down");
        if (cartIcon) {
            cartIcon.addEventListener('click', showPaymentOptions);
        }

        const searchButton = document.querySelector("button[onclick='searchProducts()']");
        if (searchButton) {
            searchButton.removeAttribute("onclick");
            searchButton.addEventListener('click', searchProducts);
        }

        document.getElementById("cardPaymentBtn")?.addEventListener('click', showCardForm);
        document.getElementById("cashPaymentBtn")?.addEventListener('click', showCashForm);

        document.querySelectorAll(".pay-btn").forEach(button => {
            button.removeAttribute("onclick");
            button.addEventListener('click', showMessage);
        });
    });

    // Music play/pause functionality
    const music = document.getElementById("music");
    const musicBtn = document.getElementById("music-btn");
    let isPlaying = false;

    if (musicBtn) {
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
    }
});
