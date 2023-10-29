const pessoa = {
    nome: 'juan',
    idade: 17,
    'email': 'juan@gmail.com'
}

//prop e cada propiedade e não o seu valor

for(let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}