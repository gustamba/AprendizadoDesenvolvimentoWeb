let soma, subtra, mult, divi = 0

function contas(a, b) {
    soma = a + b
    subtra = a - b
    mult = a * b
    divi = a % b
    return console.log(soma, subtra, mult, divi)
}

contas(2, 7)
