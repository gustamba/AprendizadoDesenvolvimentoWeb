// .split() -transforma string em array separando por texto informado
// for (let i = 1; i < var; i++) {} -enquanto i < var ele executa o bloco de programação
// parseInt() -transforma string em número
// if() {} else if {}

let stringPontuacoes = "10 20 20 8 25 3 0 30 1"

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
 
console.log(avaliaPontuacoes(stringPontuacoes))