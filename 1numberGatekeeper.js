let entry = window.prompt("Enter whole number from 10 - 99.");

while (
    entry === null ||
    entry === "" ||
    isNaN(Number(entry)) ||
    Number(entry) % 1 !== 0 ||
    Number(entry) < 10 ||
    Number(entry) > 99
) {
    entry = window.prompt("Invalid, enter whole number from 10 - 99:");
}

const wholeNumber = Number(entry);
const isEven = wholeNumber % 2 === 0;
const sameDigits = wholeNumber % 11 === 0;

console.log(`You entered ${wholeNumber}.`);
const EvenOrOdd = isEven ? "The number is even." : "The number is odd.";
const DigitSameOrDif = sameDigits
    ? "The two digits are the same."
    : "The two digits are different.";

console.log(EvenOrOdd);
console.log(DigitSameOrDif);

document.getElementById("output").textContent =
    `You entered ${wholeNumber}.\n${EvenOrOdd}\n${DigitSameOrDif}`;