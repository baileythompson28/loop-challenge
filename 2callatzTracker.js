let entry = window.prompt("Enter a positive whole number.");

while (
    entry === null ||
    entry === "" ||
    isNaN(Number(entry)) ||
    !Number.isInteger(Number(entry)) ||
    Number(entry) <= 0

) {
    entry = window.prompt("Invalid, enter a positive whole number:");
}

let currentValue = Number(entry);
let steps = 0;
const sequence = [currentValue];

while (currentValue !== 1) {
    if (currentValue % 2 === 0) {
        currentValue /= 2;
    } else {
        currentValue = currentValue * 3 + 1;
    }

    sequence.push(currentValue);
    steps++;
}

document.getElementById("output").textContent =
    `You entered: ${sequence[0]}.\nSequence: ${sequence.join(", ")}\nNumber of steps: ${steps}`;