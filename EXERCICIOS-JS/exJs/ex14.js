function temFruta(fruta) {
    let resposta = ''
    switch (fruta) {
        case 'maçã':
            resposta = 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            resposta = 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            resposta = 'Aqui está, são 3 reais o quilo'
            break
        default:
            resposta = 'Erro'
            break
    }
    return resposta
}

console.log(temFruta('maçã'))
console.log(temFruta('kiwi'))
console.log(temFruta('melancia'))
console.log(temFruta('pera'))