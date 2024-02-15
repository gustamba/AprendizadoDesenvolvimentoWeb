//Tipo 1
let dobro = function (a) {
    return 2 * a
}

//Tipo 2
dobro = (a) => {
    return 2 * a
}

//Tipo 3
dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return `Ola`
}

ola = () => `Ola`
ola = _ => `Ola` // possui um param
console.log(ola())