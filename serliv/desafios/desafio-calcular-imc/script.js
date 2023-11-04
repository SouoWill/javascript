function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)
    let imc = document.getElementById('imc')
    let resIMC =  peso / (altura * altura)

    if(resIMC >= 16.0 && resIMC <= 16.9) 
    {
        imc.innerHTML = `<p>Seu IMC é: <strong>${resIMC.toFixed(1)}</strong> <br> Você está muito abaixo do peso!</p>`
    } else if (resIMC >= 17.0 && resIMC <= 18.4) 
    {
        imc.innerHTML = `<p>Seu IMC é: <strong>${resIMC.toFixed(1)}</strong> <br> Você está abaixo do peso!</p>`
    } else if (resIMC >= 18.5 && resIMC <= 24.9) 
    {
        imc.innerHTML = `<p>Seu IMC é: <strong>${resIMC.toFixed(1)}</strong> <br> Você está no peso ideal!</p>`
    } else if (resIMC >= 25.0 && resIMC <= 29.9) 
    {
        imc.innerHTML = `<p>Seu IMC é: <strong>${resIMC.toFixed(1)}</strong> <br> Você está acima do peso!</p>`
    } else if (resIMC >= 30.0 && resIMC <= 34.9)
    {
        imc.innerHTML = `<p>Seu IMC é: <strong>${resIMC.toFixed(1)}</strong> <br> Você com obesidade grau I!</p>`
    } else if (resIMC >= 35.0 && resIMC <= 40.0)
    {
        imc.innerHTML = `<p>Seu IMC é: <strong>${resIMC.toFixed(1)}</strong> <br> Você com obesidade grau II!</p>`
    } else if (resIMC > 40.0) {
        imc.innerHTML = `<p>Seu IMC é: <strong>${resIMC.toFixed(1)}</strong> <br> Você com obesidade grau III!</p>`
    }
}