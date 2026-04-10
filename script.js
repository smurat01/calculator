// math functions
function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

// variables to hold data
let num1;
let num2;
let operator;
let answer;

// runs the math operation
function operate() {
    answer = operator === "+" ? +num1 + +num2
            : operator === "-" ? +num1 - +num2
            : operator === "*" ? +num1 * +num2
            : operator === "/" ? +num1 / +num2
            : "error";

    display.textContent = answer;
    num2 = answer;
}

let equalTo = document.querySelector("#equal");
equalTo.addEventListener("click", operate)


// Shows digits on display
const display = document.querySelector(".display");
display.textContent = "";

let digits = document.querySelectorAll(".number");
digits.forEach(digit => digit.addEventListener("click", updateDisplay))

function updateDisplay(e) {
    display.textContent += e.target.textContent;
    num2 = display.textContent;
}


// Runs code when operator is clicked
let operators = document.querySelectorAll(".operators");
operators.forEach(op => op.addEventListener("click", useOperator))

function useOperator(e) {
    num1 = num2;
    num2 = "";
    operator = e.target.textContent;
    display.textContent = "";
}