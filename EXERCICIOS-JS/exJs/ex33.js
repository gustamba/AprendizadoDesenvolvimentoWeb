let vetorInteiro = [2, 3, 4, 5]
let vetorString = ["Dado", "Peça", "Tabuleiro"]
let vetorDouble = [5.2, 2.2, 3.2, 1.5, 8.8]


function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))