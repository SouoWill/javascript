function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('OPS! Os dados inseridos estão inválidos.')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (sexo)
    }
}