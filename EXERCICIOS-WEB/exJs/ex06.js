// montante da aplicação financeira sob o regime de juros simples
function jurosSimples(capitalInicial, taxa, tempo) {
    let valorFinal = capitalInicial + capitalInicial * taxa * tempo
    console.log(valorFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
}

// valor da aplicação sob o regime de juros composto
function jurosComposto(capitalInicial, taxa, tempo) {
    let valorFinal = capitalInicial * (1 + taxa) ** tempo 
    console.log(valorFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
}

jurosSimples(2000, 0.15, 3)
jurosComposto(2000, 0.15, 3)