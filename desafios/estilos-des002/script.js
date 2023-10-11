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
        var tamanho = document.getElementById('tamanho')
        var img = document.getElementById('tamanho-img')

        if (sexo[0].checked) {

            genero = 'Homem'

            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'estilos-des002/crianca-m.png')
            } else if (idade < 21) {

                img.setAttribute('src', 'estilos-des002/jovem-m.png')
            } else if (idade < 50) {

                img.setAttribute('src', 'estilos-des002/adulto-m.png')
            } else {

                img.setAttribute('src', 'estilos-des002/idoso-m.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                
                img.setAttribute('src', 'estilos-des002/crianca-f.png')
            } else if (idade < 21) {
                
                img.setAttribute('src', 'estilos-des002/jovem-f.png')
            } else if (idade < 50) {
                
                img.setAttribute('src', 'estilos-des002/adulto-f.png')
            } else {
                
                img.setAttribute('src', 'estilos-des002/idoso-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`

        res.style.textAlign = 'center'
    }
}