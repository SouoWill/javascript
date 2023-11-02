let x = 10
x =  'string'

console.log(x)

let msg = 'oiaa "oiaaaa"'
console.log(msg)

function teste() {
    console.log(this)
}
teste()

const obj = {
    n: 0,
    teste
}

obj.teste()