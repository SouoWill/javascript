function enableOrDisableButton() {
    const checkBox = document.getElementById('contrato');
    const submit = document.getElementById('submit');

    if (checkBox.checked === false) 
    {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
}