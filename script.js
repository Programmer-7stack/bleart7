// Funksioni për kërkimin e produkteve
function searchProducts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase(); // Merr tekstin e kërkimit dhe e bën të vogël
    var productCards = document.querySelectorAll(".product-card"); // Merr të gjitha produktet

    productCards.forEach(function(card) {
        var productName = card.getAttribute("data-name").toLowerCase(); // Merr emrin e produktit
        if (productName.includes(searchInput)) {
            card.style.display = "block"; // Nëse emri i produktit përmban tekstin e kërkuar, shfaq produktin
        } else {
            card.style.display = "none"; // Ndryshe, fshi produktin
        }
    });
}


function showMessage() {
    const modal = document.getElementById("cardModal");
    modal.style.display = "flex"; // Show the modal
}

function closeModal() {
    const modal = document.getElementById("cardModal");
    modal.style.display = "none"; // Hide the modal
}

function processPayment(event) {
    event.preventDefault();
    alert("Blerja e produktit është kryer me sukses!");
    closeModal(); // Close the modal after payment
}


    

