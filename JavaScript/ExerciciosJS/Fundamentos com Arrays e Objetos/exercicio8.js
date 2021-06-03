/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplicação(n1, n2) {
    let resultado = 0
    if (n1 >= 0 && n2 >= 0) {
        for (i = 0; i < n2; i++) {
            resultado += n1
        }
        return resultado
    } else {
        return "Números informados negativos."
    }
}

console.log(multiplicação(6, 3))
console.log(multiplicação(5, 5))
console.log(multiplicação(-5, 5))
console.log(multiplicação(0, 7))

