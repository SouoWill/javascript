function alteraArray(a) {
    a.push('adicionar')
}

let arr = ['a']

console.log(arr)
alteraArray(arr) // aqui ele ta passando o espaço dentro da memoria
console.log(arr)

function alteraPrimitivo(p) { // p recebe o valor mensagem
    p += ' adicionado'
}

let msg = 'mensagem'

console.log(msg)
alteraPrimitivo(msg)  // tipo primitivo não passa a referencia e sim o valor que ta dentro dele
console.log(msg)