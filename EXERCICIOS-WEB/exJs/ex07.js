function bhaskara1(a, b, c) {
    let delta = (b ** 2) - (4 * a * c)
    if(delta < 0) {
        console.log("Delta é negativo")
    } else {
        let x = []
        x.push((-b + Math.sqrt(delta)) / (2 * a))
        x.push((-b - Math.sqrt(delta)) / (2 * a))
        console.log(x)
    }
}

bhaskara1(1, 3, 2)
bhaskara1(3, 1, 2)