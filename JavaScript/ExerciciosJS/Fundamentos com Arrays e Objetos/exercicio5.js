/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

function maiorOUigual(x, y) {
    if (x > y) {
        return true
    } else if (x == y) {
        return true
    } else {
        return false
    }
}

console.log(maiorOUigual(1, 2))
console.log(maiorOUigual(0, 0))
console.log(maiorOUigual(5, 1))
