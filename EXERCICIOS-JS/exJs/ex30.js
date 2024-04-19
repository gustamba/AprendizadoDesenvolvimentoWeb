let numArr = [7, 4, 2, 9, 3, 8]

function qualMaiorMenor(numArr) {
    let maiorNum = numArr[0]
    let menorNum = numArr[0]
    let contador = 1
    for (i = 0; i < numArr.length; i++) {
        if (numArr[contador] > maiorNum) {
            maiorNum = numArr[contador]
        } else if (numArr[contador] < menorNum) { 
            menorNum = numArr[contador]
        }
        contador++
    }
    console.log(maiorNum, menorNum)
}

qualMaiorMenor(numArr)