var idade = 16
var idade = 65
var idade = 17
if (idade < 16) {
    console.log('Voce ainda não pode votar.')
}else {
    if (idade < 18 || idade > 65) {
        console.log(`Voce tem ${idade}, seu voto é opcional!`)
    }else {
        console.log(`Voce tem ${idade}, seu voto é obrigatorio!`)
    }
}