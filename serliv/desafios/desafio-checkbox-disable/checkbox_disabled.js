(function () {
    const $checkBox = document.getElementById('contrato').checked
    const txtNome = document.getElementById('txtNome')
    const txtEmail = document.getElementById('txtEmail')
    const submit = document.getElementById('submit')

    function enableOrDisableButton() {
        if ($checkBox === true) {
            txtNome.disabled = true;
            txtEmail.disabled = true;
            submit.disabled = true;
        } else {
            txtNome.disabled = false;
            txtEmail.disabled = false;
            submit.disabled = false;
        }
    }
    enableOrDisableButton()
}) ()   