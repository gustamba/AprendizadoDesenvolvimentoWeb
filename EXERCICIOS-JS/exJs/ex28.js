let numeroVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function imparOuPar(numerosVetor) {
    let resultado = []
    let qtsImpar = 0
    let qtsPar = 0
    for(let i = 0; i < numerosVetor.length; i++) {
        if(numerosVetor[i] % 2 == 0) {
            qtsPar++
        } else {
            qtsImpar++
        }
    }
    resultado.push(qtsImpar)
    resultado.push(qtsPar)
    console.log(`Temos ${qtsImpar} números impares e ${qtsPar} números pares.`)  
}

imparOuPar(numeroVetor)