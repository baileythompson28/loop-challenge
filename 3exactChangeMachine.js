let input = window.prompt("Enter a whole number of cents from 1 - 499.");

while (
    input !== null &&
    (input === "" ||
        isNaN(Number(input)) ||
        !Number.isInteger(Number(input)) ||
        Number(input) < 1 ||
        Number(input) > 499)
) {
    input = window.prompt("Please enter a whole number from 1 - 499.");
}

const output = document.getElementById("output");

if (input === null) {
    output.textContent = "No amount entered.";
} else {
let cents = Number(input);
let originalCents = cents;
let quarters = 0;

while (cents >= 25) {
    cents -= 25;
    quarters++;
}

let dimes = Math.floor(cents / 10);
cents %= 10;
let nickles = Math.floor(cents / 5);
cents %= 5;

let pennies = cents;
let coins = [];

if (quarters > 0) {
    coins.push(quarters + " " + (quarters === 1 ? "quarter" : "quarters"));
}
if (dimes > 0) {
    coins.push(dimes + " " + (dimes === 1 ? "dime" : "dimes"));
}
if (nickles > 0) {
    coins.push(nickles + " " + (nickles === 1 ? "nickel" : "nickels"));
}
if (pennies > 0) {
    coins.push(pennies + " " + (pennies === 1 ? "penny" : "pennies"));
}

output.textContent = originalCents + " cents = " + coins.join(", ");
}