function alturasCriancas(alturaCrianca1, taxa1, alturaCrianca2, taxa2) {
    let c1 = [alturaCrianca1, taxa1]
    let c2 = [alturaCrianca2, taxa2]
    if(c1[0] != c2[0]) {
        if(c1[0] > c2[0] && c1[1] < c2[1]) {
            let ano = 0
            for(i = 1; c1[0] > c2[0]; i++) {
                c1[0] = c1[0] + (c1[0] * (c1[1]/100))
                c2[0] = c2[0] + (c2[0] * (c2[1]/100))
                ano++
            }
            console.log(`A criança de ${alturaCrianca2}cm levará ${ano} ano(s) para passar a de ${alturaCrianca1}cm.`)
        } else if(c1[0] < c2[0] && c1[1] > c2[1]) {
            let ano = 0
            for(i = 1; c1[0] < c2[0]; i++) {
                c1[0] = c1[0] + (c1[0] * (c1[1]/100))
                c2[0] = c2[0] + (c2[0] * (c2[1]/100))
                ano++
            }
            console.log(`A criança de ${alturaCrianca1}cm levará ${ano} ano(s) para passar a de ${alturaCrianca2}cm.`)
        } else {
            console.log(`A criança de ${c1[0] < c2[0] ? c1[0]:c2[0]}cm não ficará maior que a de ${c1[0] > c2[0] ? c1[0]:c2[0]}cm`)
        }
    } else {
        console.log('As duas crianças possuem a mesma altura')
    }

}

alturasCriancas(100, 10, 130, 2)