let minhaVar = "string"
let minhaVar2 = 'string "segunda" opção'
var minhaVar3 = `Minha template literal`
let idade = 40 
let msg = "eu possuo " + idade + " anos"
let msg2 = `meu amigo também poussui ${idade} anos`

console.log(msg)
console.log(msg2)

const n1 = 10
const n2 = 1.1

console.log(`o tipo de n1 e ${typeof n1} e seu valor é ${n1}.`)

const isValid = true

console.log(`isValid: ${isValid}`)

let varTeste = null

console.log(varTeste) // valor indefinido
console.log(typeof varTeste) // tipo não definido

varTeste = 10

console.log(varTeste)