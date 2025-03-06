document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Sample product data
    const products = {
        iphone16promax: {
            name: "Apple iPhone 16 Pro Max, 512GB",
            description: "The latest iPhone with advanced features.",
            price: "1,945.50 €",
            colors: {
                "Black Titanium": "foto/1.webp"
            }
        },
        samsunggalaxys25ultra: {
            name: "Samsung Galaxy S25 Ultra, 6.9\", 12GB/ 1TB",
            description: "A powerful Android device with top-notch specs.",
            price: "1,843.50 €",
            colors: {
                "Titanium Black": "foto/2.webp"
            }
        },
        dellalienware: {
            name: "Monitor Dell Alienware AW2524HF 500Hz, 24.5\", FullHD",
            description: "A high-performance gaming monitor.",
            price: "536.50 €",
            colors: {
                "Black": "foto/3.webp"
            }
        },
        gamingpc: {
            name: "RTX 4090, AMD Ryzen 9 7950X3D, 32GB RAM, 1TB SSD - Gaming PC",
            description: "A powerful gaming PC with top-tier specs.",
            price: "4,299.50 €",
            colors: {
                "Black": "foto/4.webp"
            }
        },
        asusgeforce: {
            name: "Kartelë grafike Asus GeForce RTX 5090 32GB TUF Gaming",
            description: "A high-end graphics card for gaming.",
            price: "2,594.50 €",
            colors: {
                "Black": "foto/5.webp"
            }
        },
        amdryzen: {
            name: "Procesor AMD Ryzen 9 7950X3D",
            description: "A high-performance CPU for gaming and productivity.",
            price: "842.50 €",
            colors: {
                "Black": "foto/6.webp"
            }
        },
        steelseriesapex: {
            name: "Tastierë SteelSeries Apex PRO OmniPoint",
            description: "A premium gaming keyboard.",
            price: "317.50 €",
            colors: {
                "Black": "foto/7.webp"
            }
        },
        logitechgpro: {
            name: "Mouse Logitech G Pro X Superlight 2 Wireless",
            description: "A lightweight wireless gaming mouse.",
            price: "234.50 €",
            colors: {
                "White": "foto/8.webp"
            }
        },
        hyperxcloud: {
            name: "Kufje HyperX Cloud Alpha Wireless Headphones",
            description: "Wireless gaming headphones with excellent sound quality.",
            price: "186.50 €",
            colors: {
                "Black": "foto/9.webp"
            }
        },
        asusrogpowersupply: {
            name: "Burim energjie Asus ROG Thor Titanium 90YE00K0-B0NA00 , 1600W",
            description: "A high-wattage power supply for gaming PCs.",
            price: "921.50 €",
            colors: {
                "Black": "foto/10.webp"
            }
        },
        cougaremars: {
            name: "Tavolinë COUGAR E-MARS RGB, 1531x770x745-1195mm, 2xUSB 3.0 & USB-C",
            description: "A sturdy gaming desk with RGB lighting.",
            price: "1,129.50 €",
            colors: {
                "Black": "foto/11.webp"
            }
        },
        noblechairshero: {
            name: "Karrige Noblechairs HERO Black Edition",
            description: "A comfortable gaming chair with premium features.",
            price: "711.50 €",
            colors: {
                "Black": "foto/12.webp"
            }
        },
        msikatana: {
            name: "Laptop MSI Katana 15 B13VGK-1493XPL, 15.6\", Intel Core i7, 16GB RAM, 1TB SSD, NVIDIA GeForce RTX 4070",
            description: "A high-performance gaming laptop.",
            price: "1,533.50 €",
            colors: {
                "Black": "foto/13.webp"
            }
        },
        sonyplaystation: {
            name: "Konzolë Sony PlayStation 5 Digital Slim Edition 1TB SSD Wi-Fi",
            description: "The latest PlayStation console with digital-only gaming.",
            price: "618.50 €",
            colors: {
                "Black/White": "foto/14.webp"
            }
        }
    };

    const product = products[productId];

    if (product) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = product.price;

        const colorSelect = document.getElementById('colorSelect');
        for (const color in product.colors) {
            const option = document.createElement('option');
            option.value = product.colors[color];
            option.textContent = color;
            colorSelect.appendChild(option);
        }

        colorSelect.addEventListener('change', function () {
            document.getElementById('productImage').src = colorSelect.value;
        });

        // Set initial image
        document.getElementById('productImage').src = Object.values(product.colors)[0];
    }
});

function addToCart() {
    const productName = document.getElementById('productName').textContent;
    const productPrice = document.getElementById('productPrice').textContent;
    showMessage(productName, productPrice);
}

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
    cartIcon.addEventListener('click', showPaymentOptions);
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
