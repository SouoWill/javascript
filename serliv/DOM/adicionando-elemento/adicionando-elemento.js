(function () {
    const topBarElemento = document.createElement('div')
    topBarElemento.className = 'criada' 
    topBarElemento.innerHTML = '<p>Criei pelo JS fi</p>'

    // elementoPai.insertBefore(novoElemento, elementoRefence)
    const elementoPai = document.querySelector('#div-container')
    elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
    console.log(elementoPai.firstElementChild)
}) ()