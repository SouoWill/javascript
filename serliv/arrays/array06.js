let arr = [1, 2, 3, 4]
// arr.reverse()
// console.log(arr)

let j = 0

let soma = arr.reduce( function(acumulador, atual, indice, _arr) {
    console.log('i: ', indice)
    console.log('j: ', j++)
    console.log('acumulador: ', acumulador, '---', 'atual: ', atual)
    return acumulador + atual
}, 0)
console.log(soma)

const nomes = ['juan', 'thayna', 'victor', 'vitoria']
let nomesPorOrdem = nomes.reduce( function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
 }, {} )