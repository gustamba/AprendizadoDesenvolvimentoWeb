function porExtenso(numero) {
    numeroExtenso = ''
    numStr = numero.toString()
    switch (numStr) {
        case '1':
            numeroExtenso = 'Um'
            break
        case '2':
            numeroExtenso = 'Dois'
            break
        case '3':
            numeroExtenso = 'Tres'
            break
        case '4':
            numeroExtenso = 'Quatro'
            break
        case '5':
            numeroExtenso = 'Cinco'
            break
        case '6':
            numeroExtenso = 'Seis'
            break
        case '7':
            numeroExtenso = 'Sete'
            break
        case '8':
            numeroExtenso = 'Oito'
            break
        case '9':
            numeroExtenso = 'Nove'
            break
        case '10':
            numeroExtenso = 'Dez'
            break
        default:
            numeroExtenso = 'Número fora do intervalo'
    }
    return numeroExtenso
}

console.log(porExtenso(9))