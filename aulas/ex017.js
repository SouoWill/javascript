let num = [5, 8, 9, 3, 2]
num.push(7)  //ordem influencia
console.log(num)
console.log(`o terceiro vetor é ${num[2]}`) 
console.log(`O vetor tem ${num.length} elementos.`)

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posicão ${pos} tem o valor de ${num[pos]}.`)
}