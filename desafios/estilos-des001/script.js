function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são <strong>${hora}</strong> horas.</p>`
    
    if (hora >= 4 && hora < 12) {
        img.src = 'estilos-des001/manha.png'
        document.body.style.background = '#E9A871'
    }else if (hora >= 12 && hora < 18) {
        img.src = 'estilos-des001/tarde.png'
        document.body.style.background = '#FE938D'
    }else {
        img.src = 'estilos-des001/noite.png'
        document.body.style.background = '#1F2723'
    }
}