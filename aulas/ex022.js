function fatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero-1)  // recursiva chama ela mesma
    }
}

console.log(fatorial(5))