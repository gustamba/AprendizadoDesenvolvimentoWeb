let numArr = [2, -4, 1, -25, 12, 8, -9]

function qtsNegativos(numArr) {
    let qtsNegati = 0
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] < 0) {
            qtsNegati++
        }
    }
    console.log(qtsNegati)
}

qtsNegativos(numArr)