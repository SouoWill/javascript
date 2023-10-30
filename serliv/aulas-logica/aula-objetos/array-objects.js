const nomes = [ 'juan', 'carvalho', '' ]
const pessoa = { nome: 'juan', idade: 17, email: '' }
const pessoa1 = {}

const pessoas = [ {
    nome: 'juan',
    idade: 17
}, {
    nome: 'thayna',
    idade: 17
}, {
    nome: 'victor',
    idade: 17
}, {
    nome: 'julia',
    idade: 18
} ]

for(let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos.`)
}