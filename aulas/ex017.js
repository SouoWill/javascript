let num = [5, 8, 9, 3, 2]
num.push(7)  //ordem influencia
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O valor ${num[2]} esta na posição ${num.indexOf(9)}`)
/*
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posicão ${pos} tem o valor de ${num[pos]}.`)
}
*/

for(let pos in num) {
    console.log(`A posicão ${pos} tem o valor de ${num[pos]}.`)  //só funciona para arrays
}