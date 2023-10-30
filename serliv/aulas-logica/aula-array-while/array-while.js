// criar um array com numeros randomicos não repetidos

function generateRandomNumber(max) {
    return parseInt(Math.random() * max)
}

let arr = []
let i = 0
while(arr.length <= 20) {
    i++
    let randomNumber = generateRandomNumber(30)

    if(arr.indexOf(randomNumber) < 0) {
        arr.push(randomNumber)
    }
}

console.log(arr)
console.log('o loop foi executado', i, 'vezes')

