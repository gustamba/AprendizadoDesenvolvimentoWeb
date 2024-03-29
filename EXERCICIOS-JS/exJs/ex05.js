function paraReal(a) {
    console.log(a)
    console.log(`${a.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
}

paraReal(0.1 + 0.2)