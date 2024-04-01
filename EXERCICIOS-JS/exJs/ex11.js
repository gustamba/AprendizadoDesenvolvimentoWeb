function eBissextos(ano) {
    if (ano <= 0){
        return false
    }  else if (ano % 400 == 0) { 
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(eBissextos(0))
console.log(eBissextos(4))
console.log(eBissextos(100))
console.log(eBissextos(400))
console.log(eBissextos(800))
console.log(eBissextos(2020))
console.log(eBissextos(2021))