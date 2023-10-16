let num = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) 
    {
        return true
    } 
    else 
    {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1)  // -1 valor não encontrado
    {
        return true
    } 
    else 
    {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) 
    {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '<p class="resultado">aguardando dados...</p>'
    } 
    else 
    {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) 
    {
        window.alert('Adicione valores antes de finalizar.')
    } 
    else 
    {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores)
        {
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.<p>`
        res.innerHTML += `<p>O maior número informado é ${maior}<p>`
        res.innerHTML += `<p>O menor número informado é ${menor}<p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}<p>`
        res.innerHTML += `<p>A média dos valores é ${media}<p>`
    }
}