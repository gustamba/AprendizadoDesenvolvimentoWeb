function fatorial(numero) {
    
    if (numero < 0) {
        return 'Número não pode ser negativo'
    } else if (numero == 0) {
        return 1
    } else {  
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))