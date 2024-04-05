function avaliacao (cod, nota1, nota2, nota3) {
    let peso1 = 0
    let peso2 = 0
    let peso3 = 0
    let resultado = ''
    if (nota1 > nota2 && nota1 > nota3) {
        peso1 = 4
        peso2 = 3
        peso3 = 3
    } else if (nota2 > nota1 && nota2 > nota3) {
        peso1 = 3
        peso2 = 4
        peso3 = 3
    } else {
        peso1 = 3
        peso2 = 3
        peso3 = 4
    }
    let mediaNota = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)
    if(mediaNota >= 5) {
        resultado = `Aluno: ${cod}. Notas: ${nota1}, ${nota2}, ${nota3} média: ${mediaNota}. Aprovado`
    } else {
        resultado = `Aluno: ${cod}. Notas: ${nota1}, ${nota2}, ${nota3} média: ${mediaNota}. reprovado`
    }
    return resultado
}

console.log(avaliacao(123, 2.8, 6, 3.5))