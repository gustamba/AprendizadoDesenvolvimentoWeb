let numVetor = [10, 20 ,11, 21]

function intervalo1020(numVetor) {
    let entre1020 = 0
    let fora = 0
    for (i = 0; i < numVetor.length; i++) {
        if (numVetor[i] >= 10 && numVetor[i] <= 20) {
            entre1020++
        } else {
            fora++
        }
    }
    console.log(`existem ${entre1020} números entre os números 10 e 20, e ${fora} números fora deste intervalo`)
}

intervalo1020(numVetor)