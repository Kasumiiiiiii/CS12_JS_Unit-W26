const burgerPrice = 5.00;
const friesPrice = 2.50;
const drinkPrice = 1.50;
const taxRate = 0.15;

let burgerInput = document.querySelector(".numBurgers");
let fryInput = document.querySelector(".numFries");
let drinkInput = document.querySelector(".numDrinks");
let subtotalOutput = document.querySelector(".subtotal");
let taxOutput = document.querySelector(".tax");
let totalOutput = document.querySelector(".total");
let orderBtn = document.querySelector(".orderBtn");
let resetBtn = document.querySelector(".resetBtn");

orderBtn.addEventListener("click", calculateOrder);
drinkInput.addEventListener("change", calculateOrder);

function calculateOrder() {
    let burgers = validate(burgerInput.value);
    let fries = validate(fryInput.value);
    let drinks = validate(drinkInput.value);

    burgerInput.value = burgers;
    fryInput.value = fries;
    drinkInput.value = drinks;

    let subtotal = (burgers * burgerPrice) + (fries * friesPrice) + (drinks * drinkPrice);
    let tax = subtotal * taxRate;
    let total = subtotal + tax;

    subtotalOutput.value = subtotal.toFixed(2);
    taxOutput.value = tax.toFixed(2);
    totalOutput.value = total.toFixed(2);
}

function validate(value) {
    let num = Number(value);
    if(isNaN(num) || num < 0) {
        return 0;
    }
}

resetBtn.addEventListener("click", function() {
    subtotal = "";
    tax = "";
    total = "";
});