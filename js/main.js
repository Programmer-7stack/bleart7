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


        
window.wpbingo = window.wpbingo || {};
wpbingo.strings = {};

wpbingo.settings = {
    enableReview: true,
    enablePreLoading: true,
    sidebarMultiChoise: true,
    enableQuickView: false,
    quickViewVariantType: "radio",
};

wpbingo.loading = `
  <div class="wpbingo-loading">
    <div class="wpbingo-loading__icon">
      <span></span><span></span><span></span><span></span>
    </div>
  </div>
`;


// Selektimi i elementeve me verifikim
const justBlack = document.querySelector("#just-black");
const enterSound = document.querySelector("#enter-sound");
const introWindow = document.querySelector(".intro-window");
const enterImage = document.querySelector(".enter-image");
const animationVideoContainer = document.querySelector(".animation");
const animationVideo = document.querySelectorAll(".animation video");
const volumeIntro = 20;

if (sessionStorage.getItem("videoPlayed") && introWindow) {
    introWindow.style.display = "none";
}

if (animationVideoContainer) {
    animationVideoContainer.addEventListener("click", () => {
        animationVideo.forEach((vid) => vid.play());
        if (justBlack) justBlack.style.display = "none";
        if (enterSound) {
            enterSound.volume = volumeIntro / 100;
            enterSound.play();
        }
        if (mainContentEl) mainContentEl.style.transition = "opacity 0.5s ease-in";
        if (headerEl) headerEl.style.transition = "opacity 0.5s ease-in";
        if (mainContentEl) mainContentEl.style.opacity = "0";
        if (headerEl) headerEl.style.opacity = "0";
    });
}

function removeIntroWindow() {
    if (introWindow) {
        introWindow.classList.add("fade-out");
        sessionStorage.setItem("videoPlayed", true);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const initialSection = window.location.hash ? window.location.hash.substring(1) : "home";

    

    // Handle window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            if (mobileMenu) mobileMenu.classList.remove("active");
            if (mobileMenuBtn) mobileMenuBtn.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
});
