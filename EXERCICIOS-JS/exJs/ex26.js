function pares(n1, n2) {
    for(i = n1; i < n2 + 1; i++) {
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

pares(1, 100)