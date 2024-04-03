function aumento(salario, plano) {
    salarioFinal = 0
    switch (plano) {
        case 'A':
            salarioFinal = salario + (salario * 0.10)
            break
        case 'B':
            salarioFinal = salario + (salario * 0.15)
            break
        case 'C':
            salarioFinal = salario + (salario * 0.20)
            break
        default:
            salarioFinal = 'Plano inválido'
            break

    }
    return salarioFinal
}

console.log(aumento(2000, 'A'))
console.log(aumento(2000, 'B'))
console.log(aumento(2000, 'C'))
console.log(aumento(2000, 'D'))