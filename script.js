function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1;
let num2;
let operator;

function operate(num1, operator, num2) {
    return operator === "+" ? num1 + num2
        : operator === "-" ? num1 - num2
        : operator === "*" ? num1 * num2
        : operator === "/" ? num1 / num2
        : "";
}

const display = document.querySelector(".display");
display.textContent = "";

function updateDisplay(e) {
    display.textContent += e.target.textContent;
}

let digits = document.querySelectorAll(".number");
digits.forEach(digit => digit.addEventListener("click", updateDisplay))