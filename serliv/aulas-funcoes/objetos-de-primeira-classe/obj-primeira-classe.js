function fn(callback) {
    console.log('executar ação de callback')
    console.log(typeof callback)
    typeof callback === 'function' && callback()
}

function cb() {
    console.log('função passada por parametro.')
}
fn(cb)

const obj = {
    cb
}
obj.cb()

function fn2(n) {

    return function(n1) {
        return n * n1
    }
}

const função2 = fn2(10)
const mult = função2(2)
console.log(mult)

function fn3() {
    fn3.count++
    return function _fn3() {
        console.log('função passada por parametro.')
    }
}
fn3.count = 0

const função3 = fn3()
const função3a = fn3()
const função3b = fn3()
função3()
console.log(fn3.count)
