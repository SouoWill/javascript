let calcularBtn = document.getElementById('calcular-btn');

function calcularIMC(peso, altura) {
    if (peso > 150 || peso < 0 || altura > 3 || altura < 1) {
        alert('Informe apenas dados válidos.');
        return -1; // Retorna um valor inválido para indicar erro
    }
    return peso / (altura * altura);
}

function classificarIMC(resIMC) {
    if (resIMC < 0) {
        return "Dados inválidos";
    } else if (resIMC <= 16.9) {
        return "Muito abaixo do peso";
    } else if (resIMC <= 18.4) {
        return "Abaixo do peso";
    } else if (resIMC <= 24.9) {
        return "Peso ideal";
    } else if (resIMC <= 29.9) {
        return "Acima do peso";
    } else if (resIMC <= 34.9) {
        return "Obesidade grau I";
    } else if (resIMC <= 40.0) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}

calcularBtn.addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = document.getElementById('imc');
    const resIMC = calcularIMC(peso, altura);

    if (resIMC !== -1) {
        imc.innerHTML = `<p>Seu IMC é: <strong>${resIMC.toFixed(2)}</strong><br>Você está ${classificarIMC(resIMC)}.</p>`;
    } else {
        imc.innerHTML = `<p>Os dados inseridos são inválidos.</p>`;
    }
});