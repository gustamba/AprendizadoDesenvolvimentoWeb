
function valorLanche(codigo, quantidade) {
    let valorTotal = 0
    switch (codigo) {
        case 100:
            valorTotal = quantidade * 3.00
            break
        case 200:
            valorTotal = quantidade * 4.00
            break
        case 300:
            valorTotal = quantidade * 5.50
            break
        case 400:
            valorTotal = quantidade * 7.50
            break
        case 500:
            valorTotal = quantidade * 3.50
            break
        case 600:
            valorTotal = quantidade * 2.80
            break
        default:
            valorTotal = 'Produto não existe'
            break
    }
    return valorTotal
}

console.log(valorLanche(200, 3))
console.log(valorLanche(600, 2))
console.log(valorLanche(700, 3))