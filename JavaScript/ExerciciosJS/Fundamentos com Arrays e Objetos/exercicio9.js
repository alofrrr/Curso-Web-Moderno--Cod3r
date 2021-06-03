/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */


function repetidor(elemento, vezes) {
    const resultado = []

    for (i = 0; i < vezes; i++) {
        resultado[i] = elemento
    }
    return resultado
}

console.log(repetidor("programação", 6))
console.log(repetidor(2, 3))