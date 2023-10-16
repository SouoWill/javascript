function contar() {
    var ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Faltam dados!')
    } else {
        res.innerHTML = '<p>Calculo: </p>'
        let i = Number(ini.value) //pega o valor que estar em ini e converte para numero.
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
}