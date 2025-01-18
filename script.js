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


// Javascript

console.log("A message in console");

/* Variables */

var name = "Filan"; // String 
var mosha = 18; // Integer

var nullVar = null; // NULL
var booleanVar = true; // boolean




console.log(name);
console.log(mosha);

// sentence 

console.log("un quhem " + name + " dhe jam " + mosha + " vjeq")

//undefined variable

//console.log(mbiemri);


/* -- varibale rules */

// var 12emri = "okej"; -> incorrect
// var name = "okej"; -> correct
// var _name = "okej"; -> correct
// var $name = "okej"; -> correct
// var emri12 = "okej"; -> correct



// variable are case sensitive!!

var vetura = "AudiRs6";
var Vetura = "Benz";

console.log(vetura);


/* -- Arithmetic operations */
var a = 20;
var b = 30;

var shuma = a+b;
var ndryshimi = a-b;
var prodhimi = a*b;
var heresi = a/b;
var modulo = a%b;

console.log("Shuma mes " + a + " dhe " + b + " eshte " + shuma);
console.log("Ndryshimi mes " + a + " dhe " + b + " eshte " + ndryshimi);
console.log("Prodhimi mes " + a + " dhe " + b + " eshte " + prodhimi);
console.log("Heresi mes " + a + " dhe " + b + " eshte " + heresi);
console.log("Mbetja mes " + a + " dhe " + b + " eshte " + modulo);


// Increment variable 
var indexNumber = 10;
indexNumber++; // indexNumber = indexNumber + 1
console.log(indexNumber);


// Increment by 3
var indexNumber2 = 13;
indexNumber+=3; //indexNumber2 = indexNumber2 + 3;
console.log(indexNumber2);

//Decrement variable 
var decrementVar = 10;
decrementVar--; //decrementVar = decrementVar - 1;
console.log(decrementVar)

// Decrement variable by 3 
var decrementVar2 = 10;
decrementVar2-=3;// decrementVar2 = decrementVar2 - 3;
console.log(decrementVar2);

/* Comparison opertors */
var v = 12;
var w = 12;
console.log(v<w);     //smaller then -> false
console.log(v>w);     //greater than -> false
console.log(v == w);   //equals -> true
console.log(v != w);   //not equal -> false

/*Template literals */
var company = "Apple";
console.log(`Une punoj ne kompanine ${company}`);

/* Logical operators */
var mosha_ime = 24;
console.log(mosha_ime >= 18 && mosha_ime<=25); // AND operator

var var1 = 6;
var var2 = 7;

console.log(var1 == 6 || var2 ==6); // OR operator

