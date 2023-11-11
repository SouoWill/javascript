const arr = [1, 5, 10, 'ola', true]

let sohNumeros = arr.some( function (el) {
    return typeof el === 'number' && el > 20
})

const arr1 = arr.filter( function (el, i, _arr) {
    return typeof el === 'number'
})

const arr2 = []

arr.forEach( function (elemento, indice) {
    console.log(indice, ':', elemento)
})

console.log(arr)
console.log(arr1)