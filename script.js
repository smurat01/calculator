// math functions
function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

// variables to hold data
let num1 = "";
let num2 = "";
let operator;
let answerRounded;

// runs the math operation
function calculate() {
    if (operator === "/" && num2 === "0") {
        num1 = "";
        return display.textContent = "sneaky boi";
    }

    let answer = operator === "+" ? add(+num1, +num2)
            : operator === "-" ? subtract(+num1, +num2)
            : operator === "*" ? multiply(+num1, +num2)
            : operator === "/" ? divide(+num1, +num2)
            : "error";

    answerRounded = Math.round(answer * 100) / 100
    num1 = answerRounded;
    num2 = "";
    operator = "";
    display.textContent = answerRounded;
    return answerRounded;
}

let equalTo = document.querySelector("#equal");
equalTo.addEventListener("click", () => {
    if (num1 && operator && num2) {
        calculate();
    }
})


// Shows digits on display
const display = document.querySelector(".display");

let digits = document.querySelectorAll(".number");
digits.forEach(digit => digit.addEventListener("click", updateDisplay))

function updateDisplay(e) {
    if(+display.textContent === answerRounded) {
        display.textContent = "";
        num1 = "";
        num2 = "";
    }
    if(num2.length < 7) {
    display.append(e.target.textContent);
    num2 += e.target.textContent;
    }
}


// Runs code when operator is clicked
let operators = document.querySelectorAll(".operators");
operators.forEach(op => op.addEventListener("click", useOperator))

function useOperator(e) {
    if(num1 !== "" && num2) {
        calculate();
        operator = e.target.textContent;
        display.append(operator);
    } else if(num1 !== "") {
        display.textContent = num1;
        operator = e.target.textContent;
        display.append(operator);
    } else {
        operator = e.target.textContent;
        display.textContent = operator;
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


// Backspace function
const del = document.querySelector("#del");
del.addEventListener("click", () => {
    if(num2) {
        display.textContent = display.textContent.slice(0, -1);
        num2 = num2.slice(0, -1)
    }else if(operator) {
        display.textContent = display.textContent.slice(0, -1);
        operator = operator.slice(0, -1)
    }else{
        display.textContent = display.textContent.slice(0, -1);
        num1 = num1.slice(0, -1)
    }
})

// Add decimal point
const dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
    if(num2 && !num2.includes(".")) {
        display.textContent += ".";
        num2 += "."
    }else if(operator) {
        display.textContent += "0.";
        num2 = "0."
    }else if(num1 && !num1.includes(".")) {
        display.textContent += ".";
        num1 += "."
    }
})