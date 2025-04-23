function qualTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoB == ladoC){
        console.log(`É equilátero`)
    } else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log(`É isósceles`)
    } else {
        console.log(`É escaleno`)
    }
}

qualTriangulo(2, 2, 2)
qualTriangulo(2, 2, 3)
qualTriangulo(2, 3, 4)
