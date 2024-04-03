/*
todos pagam R$ 100 mais adicional por idade:
1) criança com menos de 10 anos pagam R$ 80;
2) conveniados com idade entre 10 e 30 anos pagam R$ 50;
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$ 130
*/

function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));