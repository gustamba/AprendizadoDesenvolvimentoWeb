function progressaoAritmetica(n, a1, r) {
    let progressao = [];
    let soma = 0;
    for(i = 0; i < n; i++) {
        let an = a1 + ((i + 1) - 1) * r;
        progressao.push(an);
        soma += an;
    }
    console.log(`Progressão: ${progressao}`)
    console.log(`Soma: ${soma}`)
}

function progressaoGeométrica(n, a1, q) {
    let progressao = [];
    let soma = 0;
    for (i = 0; i < n; i++) {
        let an = a1 * (q ** ((i + 1) - 1));
        progressao.push(an);
        soma += an;
    }
    console.log(`Progressão: ${progressao}`)
    console.log(`Soma: ${soma}`)
}


progressaoAritmetica(10, 10, 15)
console.log('---------------------------')
progressaoGeométrica(10, 5, 3)