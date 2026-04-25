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

let nr1 = "", operator = "none", nr2 = ""

const screen = document.querySelector("#screen")
const btnDot = document.querySelector("#dot")
const btnEqual = document.querySelector("#equal")
const btnDivide = document.querySelector("#divide")
const btnMultiply = document.querySelector("#multiply")
const btnSubstract = document.querySelector("#substract")
const btnAdd = document.querySelector("#add")
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

const buttons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]



for (let i = 0; i <= 9; i++)
    buttons[i].addEventListener("click", () => {
        if (operator === "none") {
            nr1 = nr1 + i; screen.textContent = nr1;
        }
        else {
            nr2 = nr2 + i; screen.textContent = nr2;
        }
    }
    )

btnDivide.addEventListener("click", () => { operator = "divide"; screen.textContent = "/" })

btnMultiply.addEventListener("click", () => { operator = "multiply"; screen.textContent = "*" }
)

btnSubstract.addEventListener("click", () => { operator = "substract"; screen.textContent = "-" }
)

btnAdd.addEventListener("click", () => { operator = "add"; screen.textContent = "+" }
)

