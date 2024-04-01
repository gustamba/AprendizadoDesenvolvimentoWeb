function avaliacaoNotas(nota) {
    let notaCorrigida = aredondarNota(nota)
    if(notaCorrigida < 40) {
        console.log('Reprovado com nota ' + notaCorrigida)
    } else {
        console.log('Aprovado com nota ' + notaCorrigida)
    } 
}

function aredondarNota(nota) {
    if(nota % 5 > 2) {
        return nota +(5 - nota % 5)
    } else {
        return nota
    }
}

avaliacaoNotas(100)
avaliacaoNotas(30)
avaliacaoNotas(38)
avaliacaoNotas(88)
avaliacaoNotas(61)