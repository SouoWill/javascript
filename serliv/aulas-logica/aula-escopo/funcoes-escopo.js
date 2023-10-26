let n = 'global';

function mostrarN() {
    n1 = 'n1 local'
    
    if(true) {
        let n1 = ' n1 dentro de if com let'
    }
    console.log('valor de n1: ' + n1)
}
mostrarN()
console.log('valor de n: ' + n)