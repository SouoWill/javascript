const arr = [1, 5, 10, 'ola', true]

let sohNumeros = arr.some( function (el) {
    return typeof el === 'number' && el > 20
})

let arr1 = arr.filter( function (el, i, _arr) {
    return typeof el === 'number'
})

let arr2 = []

arr.forEach( function (elemento, indice) {
    console.log(indice, ':', elemento)
})

let _arr2 = arr1.map( function (element, indic, _arr) {
    return element * element
})

console.log(arr)
console.log(_arr2)