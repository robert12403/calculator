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
    if (operator === "" || nr2 === "")
        return Number(nr1).toString()
    if (operator === "+")
        return add(nr1, nr2)
    if (operator === "-")
        return substract(nr1, nr2)
    if (operator === "*")
        return multiply(nr1, nr2)
    if (operator === "/")
        return divide(nr1, nr2)

}

let nr1 = "", operator = "", nr2 = "", afterEqual = false;

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
        if (operator === "")
            if (afterEqual === false) {
                nr1 += value
                screen.textContent = Number(nr1).toString()
            }
            else {
                afterEqual = false
                nr1 = value
                screen.textContent = Number(nr1).toString()
            }
        else {
            nr2 += value
            screen.textContent = Number(nr2).toString()
        }
    })
})

btnDivide.addEventListener("click", btnDivideFct)
btnMultiply.addEventListener("click", btnMultiplyFct)
btnSubstract.addEventListener("click", btnSubstractFct)
btnAdd.addEventListener("click", btnAddFct)
btnEqual.addEventListener("click", btnEqualFct)

function btnDivideFct() {
    if (nr2 !== "") {
        nr1 = operatorFct(nr1, operator, nr2)
        nr2 = ""
    }
    operator = "/"
    screen.textContent = Number(nr1).toString() + " /"
}

function btnMultiplyFct() {
    if (nr2 !== "") {
        nr1 = operatorFct(nr1, operator, nr2)
        nr2 = ""
    }
    operator = "*"
    screen.textContent = Number(nr1).toString() + " *"
}

function btnSubstractFct() {
    if (nr2 !== "") {
        nr1 = operatorFct(nr1, operator, nr2)
        nr2 = ""
    }
    operator = "-"
    screen.textContent = Number(nr1).toString() + " -"
}

function btnAddFct() {
    if (nr2 !== "") {
        nr1 = operatorFct(nr1, operator, nr2)
        nr2 = ""
    }
    operator = "+"
    screen.textContent = Number(nr1).toString() + " +"
}

function btnEqualFct() {
    nr1 = operatorFct(nr1, operator, nr2)
    screen.textContent = nr1
    operator = ""
    nr2 = ""
    afterEqual = true
}

btnClear.addEventListener("click", () => { nr1 = ""; operator = ""; nr2 = "", afterEqual = false; screen.textContent = "0" })

btnUndo.addEventListener("click", () => {
    if (nr2 === "" && operator === "" && afterEqual === false) {
        nr1 = nr1.slice(0, -1)
        screen.textContent = Number(nr1).toString()
    }
    else if (nr2 !== "") {
        nr2 = nr2.slice(0, -1)
        screen.textContent = Number(nr2).toString()
    }
})

btnDot.addEventListener("click", () => {
    if (nr2 === "" && operator === "" && !nr1.includes(".")) {
        nr1 = nr1 + "."
        screen.textContent = nr1
    }
    else if (nr2 !== "") {
        nr2 = nr2 + "."
        screen.textContent = nr2
    }
})