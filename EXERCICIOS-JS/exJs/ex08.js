// .split() -transforma string em array separando por texto informado
// for (let i = 1; i < var; i++) {} -enquanto i < var ele executa o bloco de programação
// parseInt() -transforma string em número
// if() {} else if {}

// retornar com dois valores, número de vezes que bateu seu record
// e quando fez seu pior jogo

let stringPontuacoes = "10 20 20 8 25 3 0 30 1"

function avaliacaoPontos(stringPontuacoes) {
    let arrPontuacoes = stringPontuacoes.split(" ")
    let records = 0
    let maiorPontuacao = arrPontuacoes[0]
    let menorPontuacao = arrPontuacoes[0]
    let piorJogo = 1
    let resultado = []
    for(let i = 1; i < arrPontuacoes.length; i++) {
        if(parseInt(arrPontuacoes[i]) > parseInt(maiorPontuacao)) {
            records++
            maiorPontuacao = arrPontuacoes[i]
        } else if(parseInt(arrPontuacoes[i]) < parseInt(menorPontuacao)) {
            piorJogo = i + 1
            menorPontuacao = arrPontuacoes[i]
        }
    }
    resultado.push(records)
    resultado.push(piorJogo)
    return resultado
}

console.log(avaliacaoPontos(stringPontuacoes))











/*
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(" ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes)) */