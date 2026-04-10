// math functions
function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

// variables to hold data
let num1 = "";
let num2 = "";
let operator;

// runs the math operation
function calculate() {
    let answer = operator === "+" ? add(+num1, +num2)
            : operator === "-" ? subtract(+num1, +num2)
            : operator === "*" ? multiply(+num1, +num2)
            : operator === "/" ? divide(+num1, +num2)
            : "error";
    num1 = answer;
    num2 = "";
    return answer;
}

// let equalTo = document.querySelector("#equal");
// equalTo.addEventListener("click", operate)


// Shows digits on display
const display = document.querySelector(".display");

let digits = document.querySelectorAll(".number");
digits.forEach(digit => digit.addEventListener("click", updateDisplay))

function updateDisplay(e) {
    display.append(e.target.textContent);
    num2 += e.target.textContent;
}


// Runs code when operator is clicked
let operators = document.querySelectorAll(".operators");
operators.forEach(op => op.addEventListener("click", useOperator))

function useOperator(e) {
    if(num1 !== "") {
        display.textContent = calculate();
        operator = e.target.textContent;
        display.append(operator);
    } else {
        operator = e.target.textContent;
        display.append(operator);
        num1 = num2;
        num2 = "";
    }
}


// Clears display
const clear = document.querySelector("#c");
clear.addEventListener("click", e => {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    answer = "";
})