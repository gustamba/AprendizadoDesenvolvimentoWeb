function conceitoNotas(notas) {
    let conceitos = [];
    for (let i = 0; i < notas.length; i++) {
        let conceito = '';
        if(notas[i] < 5 && notas[i] >= 0) {
            conceito = 'D';
        } else if(notas[i] < 7) {
            conceito = 'C';
        } else if(notas[i] < 9) {
            conceito = 'B';
        } else if(notas[i] <= 10) {
            conceito = 'A';
        } else {
            conceito = 'Invalido';
        }
        console.log(`A nota ${notas[i]} tem o conceito ${conceito}`)
    }
}

let notas = [3.2, 6.3, 13, 7.2, 9.9]

conceitoNotas(notas)