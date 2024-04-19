vetorNum = [1, 2, 3, 4, 5];

function vetorMulti(vetor, numInt) {
    let vetorResult = [];
    vetor.forEach(elemento => {
        vetorResult.push(elemento * numInt)
    });

    console.log(`Resultado do vetor vezes ${numInt}: ${vetorResult}`)
}

function vetorMulti5(vetor, numInt) {
    vetorResult = [];
    if(numInt < 5 ) return
    vetor.forEach(elemento => {
        vetorResult.push(elemento * numInt)
    })
    console.log(`Resultado do vetor vezes ${numInt}: ${vetorResult}`)
}

vetorMulti(vetorNum, 3)
vetorMulti5(vetorNum, 11)