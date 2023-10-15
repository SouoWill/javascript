function parimp(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimp(num.value)
let num = 5
console.log(`O número ${num} é ${res}`)