function quantasNotas(valor) {
     if(valor > 100) {
        console.log(Math.floor(valor / 100) + ' notas de R$ 100')
        valor = valor - (Math.floor(valor / 100) * 100)
     }
     if(valor > 50) {
        console.log(Math.floor(valor / 50) + ' notas de R$ 50')
        valor = valor - (Math.floor(valor / 50) * 50)
     }
     if(valor > 10) {
        console.log(Math.floor(valor / 10) + ' notas de R$ 10')
        valor = valor - (Math.floor(valor / 10) * 10)
     }
     if(valor > 5) {
        console.log(Math.floor(valor / 5) + ' notas de R$ 5')
        valor = valor - (Math.floor(valor / 5) * 5)
     }
     if(valor > 1){
        console.log(Math.floor(valor / 1) + ' notas de R$ 1')
        valor = valor - (Math.floor(valor / 1) * 1)
     }
}

quantasNotas(330)