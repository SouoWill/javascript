function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value)
    const nota2 = parseFloat(document.getElementById('nota2').value)
    let media = (nota1 + nota2) / 2

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) 
    {
        alert("Por favor, insira notas válidas entre 0 e 10.")
        return 
    }

    if(media >= 8) 
    {
        document.getElementById('media').innerHTML = `<p>A media do aluno é: ${media.toFixed(1)} <br> ele esta <strong>acima</strong> da média!</p>`
    } else if(media >= 6) {
        document.getElementById('media').innerHTML = `<p>A media do aluno é: ${media.toFixed(1)} <br> ele esta na da média!</p>`
    } else {
        document.getElementById('media').innerHTML = `<p>A media do aluno é: ${media.toFixed(1)} <br> ele <strong>abaixo</strong> na da média!</p>`
        return
    }
}