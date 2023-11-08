function addNome() {
    const nome = prompt('digite seu nome: ')
    document.querySelector('#top-bar p').textContent = `Bem-vindo(a), ${nome}`
}


