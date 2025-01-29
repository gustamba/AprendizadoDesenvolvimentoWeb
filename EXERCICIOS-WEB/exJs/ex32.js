let numArr = [2, 3, 4]

function mediaAritmetica(numArr) {
    let soma = 0
    for(i = 0; i < numArr.length; i++) {
        soma += numArr[i]
    }
    let resultado = soma / numArr.length
    console.log(resultado)
}

mediaAritmetica(numArr)