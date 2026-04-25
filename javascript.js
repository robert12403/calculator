function add(nr1, nr2) {
    return nr1 + nr2
}

function substract(nr1, nr2) {
    return nr1 - nr2
}

function multiply(nr1, nr2) {
    return nr1 * nr2
}

function divide(nr1, nr2) {
    return nr1 / nr2
}

function operatorFct(nr1, operator, nr2) {
    if (operator === "add")
        return add(nr1, nr2)
    if (operator === "substract")
        return substract(nr1, nr2)
    if (operator === "multiply")
        return multiply(nr1, nr2)
    if (operator === "divide")
        return divide(nr1, nr2)
}

let nr1 = 0, operator, nr2

const screen = document.querySelector("#screen")

const btnUndo = document.querySelector("#undo")
const btnClear = document.querySelector("#clear")

const btn0 = document.querySelector("#zero")
const btn1 = document.querySelector("#one")
const btn2 = document.querySelector("#two")
const btn3 = document.querySelector("#three")
const btn4 = document.querySelector("#four")
const btn5 = document.querySelector("#five")
const btn6 = document.querySelector("#six")
const btn7 = document.querySelector("#seven")
const btn8 = document.querySelector("#eight")
const btn9 = document.querySelector("#nine")

const btnDot = document.querySelector("#dot")
const btnEqual = document.querySelector("#equal")
const btnDivide = document.querySelector("#divide")
const btnMultiply = document.querySelector("#multiply")
const btnSubstract = document.querySelector("#substract")
const btnAdd = document.querySelector("#add")

btn0.addEventListener("click", () => { nr1 = nr1 * 10 + 0; screen.textContent = nr1; })
btn1.addEventListener("click", () => { nr1 = nr1 * 10 + 1; screen.textContent = nr1; })
btn2.addEventListener("click", () => { nr1 = nr1 * 10 + 2; screen.textContent = nr1; })
btn3.addEventListener("click", () => { nr1 = nr1 * 10 + 3; screen.textContent = nr1; })
btn4.addEventListener("click", () => { nr1 = nr1 * 10 + 4; screen.textContent = nr1; })
btn5.addEventListener("click", () => { nr1 = nr1 * 10 + 5; screen.textContent = nr1; })
btn6.addEventListener("click", () => { nr1 = nr1 * 10 + 6; screen.textContent = nr1; })
btn7.addEventListener("click", () => { nr1 = nr1 * 10 + 7; screen.textContent = nr1; })
btn8.addEventListener("click", () => { nr1 = nr1 * 10 + 8; screen.textContent = nr1; })
btn9.addEventListener("click", () => { nr1 = nr1 * 10 + 9; screen.textContent = nr1; })

