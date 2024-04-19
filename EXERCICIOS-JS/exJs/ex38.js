function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        //let corrigir = inicio
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim
    }
    
    for (let i = inicio; i <= fim; i++) {
        if(i == 1 || !(i % 2 == 0)) { 
            console.log(i)
        }
    }
}

imprimirImpares(19, 3)