// criar um array com numeros randomicos não repetidos

function generateRandomNumber(max) {
    return parseInt(Math.random() * max)
}

let arr = []

while(arr.length <= 20) {
    let randomNumber = generateRandomNumber(30)
    console.log(randomNumber)
}

