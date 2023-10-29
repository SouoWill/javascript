const arr = new Array()
const arr2 = new Array(true, "Daniel", 28, new Array(2, 4 ,10))
arr[0] = "Juan"
arr[1] = 40
console.log(arr)
console.log(arr2[3][arr2[2].length - 1])

// literal (mais usada)

const arr3 = ['daniel', 40, [3, 6, 9], true]
//colocar mais um valor
arr3[4] = 'a'
arr3[arr3.length] = 'b'
arr3.push('push')
arr3.push('a', 'b', 'c')

console.log(arr3)
console.log(arr3[2])
//abaixo pega a array dentro da array arr3 e selecionar o indice 0
console.log(arr3[2][0])
let n = 6 
console.log(arr3[n])

