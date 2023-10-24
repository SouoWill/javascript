function mostrarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const tabuada = document.getElementById('tabuada');
    
    // Limpa o conteúdo anterior da div
    tabuada.innerHTML = '';
    
    if (isNaN(numero)) {
        window.alert('Por favor, insira um número válido.')
    } else {
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            tabuada.innerHTML += `${numero} x ${i} = ${resultado}<br>`;
        }
    }
}

function limparTabuada() {
    tabuada.innerHTML = '';
}

//popup

const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", function() {
    popup.style.display = "flex";
});

closePopupButton.addEventListener("click", function() {
    popup.style.display = "none";
});

// Fechar o popup quando o usuário clicar fora do conteúdo do popup
window.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
