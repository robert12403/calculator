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

function operator(nr1, operator, nr2) {
    if (operator === "add")
        return add(nr1, nr2)
    if (operator === "substract")
        return substract(nr1, nr2)
    if (operator === "multiply")
        return multiply(nr1, nr2)
    if (operator === "divide")
        return divide(nr1, nr2)
}

let nr1, operator, nr2