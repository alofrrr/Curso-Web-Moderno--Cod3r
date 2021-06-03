/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".*/

function inverso(x) {
    tipo = typeof x
        if (x == true) {
            return false
        } else if (x == false) {
            return true
        }else if(tipo == "number") {
        return x * -1
    }else{
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}!`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(6))
console.log(inverso(-6))
console.log(inverso("a"))
console.log(inverso(null))
console.log(inverso("10"))

