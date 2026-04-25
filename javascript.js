function add(nr1, nr2) {
    return (Number(nr1) + Number(nr2)).toString()
}

function substract(nr1, nr2) {
    return (Number(nr1) - Number(nr2)).toString()
}

function multiply(nr1, nr2) {
    return (Number(nr1) * Number(nr2)).toString()
}

function divide(nr1, nr2) {
    return (Number(nr1) / Number(nr2)).toString()
}

function operatorFct(nr1, operator, nr2) {
    if (operator === "+")
        return add(nr1, nr2)
    if (operator === "-")
        return substract(nr1, nr2)
    if (operator === "*")
        return multiply(nr1, nr2)
    if (operator === "/")
        return divide(nr1, nr2)
}

let nr1 = "", operator = "", nr2 = ""

const screen = document.querySelector("#screen")

const btnDot = document.querySelector("#dot")
const btnEqual = document.querySelector("#equal")
const btnDivide = document.querySelector("#divide")
const btnMultiply = document.querySelector("#multiply")
const btnSubstract = document.querySelector("#substract")
const btnAdd = document.querySelector("#add")
const btnUndo = document.querySelector("#undo")
const btnClear = document.querySelector("#clear")

const btnNum = document.querySelectorAll(".buttonNum")

btnNum.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-val")
        let third = false
        nr1 += value
        screen.textContent = nr1
    })
})

btnDivide.addEventListener("click", () => { operator = "/"; screen.textContent = "/" })
btnMultiply.addEventListener("click", () => { operator = "*"; screen.textContent = "*" })
btnSubstract.addEventListener("click", () => { operator = "-"; screen.textContent = "-" })
btnAdd.addEventListener("click", () => { operator = "+"; screen.textContent = "+" })

