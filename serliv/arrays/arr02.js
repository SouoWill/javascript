let arr = [4, 5, 10, 20, 20, 35, 4, 5]

console.log( arr.indexOf(5) )
console.log( arr.lastIndexOf(5) )

console.log(arr.includes(5))

console.log(arr.find( function(elemento) {
    return elemento > 10
}))

console.log(arr.findIndex( function(elemento) {
    return elemento > 10
}))
