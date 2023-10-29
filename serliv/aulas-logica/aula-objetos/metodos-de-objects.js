//a palavra this representa o proprio objeto

const produto = {
    nome: 'caneta',
    qtd: 10,
    comprar: function(n) {
        console.log(this)
        if(n > this.qtd) {
            return 'quantidade não disponivel'
        }
        this.qtd -= n
    },
    teste1: function() {
        console.log(this)
    },
    teste2: () =>{
        console.log(this)
    }
}

produto.comprar(3)
//console.log(produto)

produto.comprar(13)
//console.log(produto)

produto.teste1()
produto.teste2()