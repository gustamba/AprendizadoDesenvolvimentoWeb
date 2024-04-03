let valores = []
let numero = ''


function adicionarValor(valor) {
    numero += valor.toString()
}

function adicionarOperacao(operacao) {
    valores.push(numero.toString())
    valores.push(operacao)
    numero = ''
}

function resultado() {
    let solucao = 0
    switch(valores[1]) {
        case '+':
            solucao = parseInt(valores[0]) + parseInt(valores[2])
            break
        case '-':
            solucao = parseInt(valores[0]) - parseInt(valores[2])
            break
        case '*':
            solucao = parseInt(valores[0]) * parseInt(valores[2])
            break
        case '/':
            solucao = parseInt(valores[0]) / parseInt(valores[2])
            break
        default:
            solucao = 'Error'
            break
    }
    return solucao
}

adicionarValor('1')
adicionarOperacao('+')
adicionarValor('2')
console.log(resultado())