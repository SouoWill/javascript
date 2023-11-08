function addNome() {
    const nome = prompt('Digite seu nome:')

    if(nome === null ) 
    {
        document.querySelector('div.top-bar p').textContent = `Bem-vindo(a)`
    } else {
        document.querySelector('div.top-bar p').textContent = `Bem-vindo(a), ${nome}`
    }
}

A
