document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none"; 
    }, 1000); 
});


// Funksioni për kërkimin e produkteve
function searchProducts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function(card) {
        var productName = card.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}





// Array për ruajtjen e produkteve në shportë
let cartItems = [];

// Funksioni për shtimin e produktit në shportë
function showMessage(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCartIcon();
    alert("Produkti u shtua në shportë!");
}

// Përditëso ikonën e shportës
function updateCartIcon() {
    const cartIcon = document.querySelector(".fa-cart-arrow-down");
    if (cartItems.length > 0) {
        cartIcon.style.color = "#D32F2F";
    }
}

// Shfaq modalin e pagesës
function showModal() {
    if (cartItems.length === 0) {
        alert("Shporta është e zbrazët!");
        return;
    }
    const modal = document.getElementById("cardModal");
    modal.style.display = "flex";
}

// Mbyll modalin
function closeModal() {
    const modal = document.getElementById("cardModal");
    modal.style.display = "none";
}

// Proceso pagesën
function processPayment(event) {
    event.preventDefault();
    alert("Blerja e produktit është kryer me sukses!");
    cartItems = []; // Zbraz shportën pas blerjes
    updateCartIcon();
    closeModal();
}

// Shto event listener për ikonën e shportës
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
                musicBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change to Play icon
            } else {
                music.play();
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Change to Pause icon
            }
            isPlaying = !isPlaying;
        });