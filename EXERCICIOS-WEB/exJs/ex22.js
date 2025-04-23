function anuidadeAssociacao(mesPago, valorAnuidade) {
    if(mesPago > 0 && mesPago < 13) {
        --mesPago
        let valorFinal = (valorAnuidade * ((1 + 0.05) ** mesPago)).toFixed(2)
        return valorFinal
    } else {
        return 'Mês inválido'
    }
}

console.log(anuidadeAssociacao(4, 100))