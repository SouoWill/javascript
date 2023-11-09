const msgFeedback = document.getElementById('newsletterFeedback')

function validarEmail() {
    const txtEmail = document.getElementById('txtEmail').value
    msgFeedback.innerHTML = '<p>Validado com sucesso!'
}