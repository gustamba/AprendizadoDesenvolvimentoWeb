function comprarCarro(carro) {
    let resposta = ''
    switch (carro) {
        case 'hatch':
            resposta = 'Compra efetuada com sucesso'
            break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            resposta = 'Tem certeza que não prefere este modelo'
            break
        default:
            resposta = 'Não trabalhamos com este tipo de automóvel aqui'
            break
    }
    return resposta
}

console.log(comprarCarro('hatch'))
console.log(comprarCarro('motocicletas'))
console.log(comprarCarro('tricicolo'))