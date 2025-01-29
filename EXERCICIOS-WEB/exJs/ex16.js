function calculadora(n1, op, n2) {
    let valores = [n1, n2]
    let operacao = op
    let resultado = 0
    switch (operacao) {
        case '+':
            resultado = valores[0] + valores[1]
            break
        case '-':
            resultado = valores[0] - valores[1]
            break
        case '*':
            resultado = valores[0] * valores[1]
            break
        case '/':
            resultado = valores[0] / valores[1]
            break
        default:
            resultado = 'Operação invalida'
            break
    }
    return resultado
}

console.log(calculadora(1, '+', 2))
console.log(calculadora(4, '-', 2))
console.log(calculadora(3, '*', 3))
console.log(calculadora(24, '/', 3))
console.log(calculadora(1, '%', 2))