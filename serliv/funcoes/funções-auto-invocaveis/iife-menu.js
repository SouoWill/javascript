
// function init() {
//     let isValid = false
//     console.log('init menu', isValid)
// }
// init()

(function(n1, n2, n3) {
    let isValid = false
    console.log('menu', isValid, (n1 + n2) * n3)

    function init() {
        console.log('init do menu')
    }
    init()
})(5, 5, 3)