function diaUtil(dia) {
    if (dia > 31 || dia < 1) {
        return 'Erro, ' + dia + ' não é um da válido'
    } else {
        let diaSemana = 0
        while (dia > 7) {
            dia = dia - 7
        }
        switch (dia) {
            case 1:
                diaSemana = 'Fim  de semana'
                break
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                diaSemana = 'Dia útil'
                break
            case 7:
                diaSemana = 'Fim de semana'    
        }
        return diaSemana
    }
}

console.log(diaUtil(2))
console.log(diaUtil(14))