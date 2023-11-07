const teste = function(cb) {
    console.log('funcao teste')
    typeof cb === 'function' && cb('passei')
}

const fn = function(param) {
    console.log('function anonima de cb')
    console.log(param)
}

// fn(30)

teste(fn) 