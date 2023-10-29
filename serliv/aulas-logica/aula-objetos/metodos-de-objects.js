const produto = {
    nome: 'caneta',
    qtd: 10,
    comprar: function(n) {
        console.log(this)
        if(n > this.qts) {
            return 'quantidade não disponivel'
        }
        this.qtd -= n
    }
}

produto.comprar(3)
console.log(produto)